import { Config } from '@oo/config';
import { Subject } from 'rxjs/Rx';
import { BarcodeDecoder } from './barcode-decoder';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'oo-barcode',
  template: `
    <video #video class="video" [hidden]="captureMode !== 'video'" (load)="captureFromCamera()"></video>
    <img #img [ngClass]="['image']" src="assets/barcode.gif" [hidden]="captureMode !== 'image'" (load)="captureFromImage()" />
  `,
  styles: [`
    .video {
        height: 50%;
        width: 100%;
        transform: scale(1);
        overflow: hidden;
    }

    .image {
        width: 100%;
    }
  `]
})
export class BarcodeFinderComponent implements OnInit, AfterViewInit {

  @ViewChild('video') _video;
  private video: HTMLVideoElement;
  @ViewChild('img') _img;
  private image: HTMLImageElement;

  private _barcode: Subject<string>;
  private _captureMode: string;

  constructor(private config: Config) {
    this._captureMode = config.captureMode;
    this._barcode = new Subject<string>();
  }

  ngOnInit() { }

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

  public captureFromCamera(): void {
    const mediaStreamConstraints: MediaStreamConstraints = {
      audio: false,
      video: {
        //   frameRate: 60,
        //   aspectRatio: 1/1
        facingMode: 'environment'
      }
    };

    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then((mediaStream: MediaStream) => {
        this.video.srcObject = mediaStream;
        this.video.onloadedmetadata = () => {
          this.video.play();

          this._barcode.concat(new BarcodeDecoder()
            .scanVideo(this.video)
            .debounceTime(800)
            .distinctUntilChanged());
        };
      })
      .catch(error => {
        console.error('Could not get User Media:', error);
      });
  }

  public captureFromImage(): void {
    const barcode = new BarcodeDecoder()
      .scanImage(this.image);

    if (barcode) {
      this._barcode.next(barcode);
    }
  }

}
