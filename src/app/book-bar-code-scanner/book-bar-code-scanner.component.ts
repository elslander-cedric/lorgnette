import { Book } from '../book';
import { Observable } from 'rxjs/Rx';
import { BarCodeDecoder } from '../barcode-decoder';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Goodreads } from '../goodreads.service';

@Component({
  selector: 'app-book-bar-code-scanner',
  templateUrl: './book-bar-code-scanner.component.html',
  styleUrls: ['./book-bar-code-scanner.component.css']
})
export class BookBarCodeScannerComponent implements OnInit, AfterViewInit {

  @ViewChild('video') _video;
  private video : HTMLVideoElement;

  @ViewChild('img') _img;
  private image : HTMLImageElement;

  public book: Observable<Book>;
  public useCamera : boolean = true;

  constructor(private goodreads : Goodreads) { }
  
  ngAfterViewInit() {
    this.video = this._video.nativeElement;
    this.image = this._img.nativeElement;
    
    if(this.useCamera) {
      this.captureFromCamera();
    } else {
      this.captureFromImage();
    }    
  }
    
  ngOnInit() {}

  private captureFromCamera() : void {
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
          this.video.play()
                      
          this.book = 
            new BarCodeDecoder().scanVideo(this.video)
              .debounceTime(800)
              .distinctUntilChanged()              
              .switchMap((barcode : string) : Observable<Book> => {
                if(barcode){
                  return this.lookupISBN(barcode);
                }                
              });          
        };
      })
      .catch(error => {
        console.error("Could not get User Media:", error);
      });
  }

  private captureFromImage() {    
    this.image.addEventListener('load', () => {
      let barcode = new BarCodeDecoder().scanImage(this.image);

      if(barcode){
        this.book = this.lookupISBN(barcode);
      }      

    }, false);
  }

  private lookupISBN(isbn : string) : Observable<Book> {    
    return this.goodreads.search(isbn);
  }
}