import { Subject } from 'rxjs/Rx';
import { Config } from '../config';
import { Book } from '../book/book';
import { BarCodeDecoder } from '../barcode-decoder';
import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { GoodreadsService } from '../goodreads.service';

@Component({
  selector: 'lorgnette-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScannerComponent implements OnInit, AfterViewInit {

  @ViewChild('video') _video;
  private video: HTMLVideoElement;
  @ViewChild('img') _img;
  private image: HTMLImageElement;

  private _barcode: Subject<string>;
  private _captureMode: string;

  constructor(private config : Config) {
    this._captureMode = config.captureMode;
    this._barcode = new Subject<string>();
  }

  ngOnInit() {
    console.log("scanner oninit");
  }

  ngAfterViewInit() {
    this.video = this._video.nativeElement;
    this.image = this._img.nativeElement;  
  }    

  public get barcode() {    
    return this._barcode;
  }

  public get captureMode() {
    return this._captureMode;
  }

  private captureFromCamera() : void {
    console.log("scanner - capture camera");
    let mediaStreamConstraints : MediaStreamConstraints = {
      audio: false,
      video: {
        //   frameRate: 60,
        //   aspectRatio: 1/1
        facingMode: "environment"
      }
    };    

    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then((mediaStream : MediaStream) => {
        this.video.srcObject = mediaStream;
        this.video.onloadedmetadata = () => {
          this.video.play();
                      
          this._barcode.concat(new BarCodeDecoder()
            .scanVideo(this.video)
            .debounceTime(800)
            .distinctUntilChanged());          
        };
      })
      .catch(error => {
        console.error("Could not get User Media:", error);
      });
  }

  private captureFromImage() : void {
    console.log("scanner - capture image");

    let barcode = new BarCodeDecoder()
      .scanImage(this.image);
   
    if(barcode) {
      console.log("scanner - capture image - barcode valid:", barcode);
      this._barcode.next(barcode);
    }
  }
}