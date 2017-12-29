import { Observable, Subscriber } from 'rxjs/Rx';

export class BarcodeDecoder {

    private static UPC_SET = {
        3211: '0',
        2221: '1',
        2122: '2',
        1411: '3',
        1132: '4',
        1231: '5',
        1114: '6',
        1312: '7',
        1213: '8',
        3112: '9'
    };

    private static EAN13_PREFIX = {
        'LLLLLL': 0,
        'LLGLGG': 1,
        'LLGGLG': 2,
        'LLGGGL': 3,
        'LGLLGG': 4,
        'LGGLLG': 5,
        'LGGGLL': 6,
        'LGLGLG': 7,
        'LGLGGL': 8,
        'LGGLGL': 9
    };

    private canvas: HTMLCanvasElement = document.createElement('canvas');
    private context: CanvasRenderingContext2D = this.canvas.getContext('2d');

    public constructor() { }

    public scanVideo(video: HTMLVideoElement): Observable<string> {
        video.width = video.width || video.videoWidth;
        video.height = video.height || video.videoHeight;

        return new Observable((subscriber: Subscriber<string>) => {
            setInterval(() => {
                const barcode = this.scan(video);

                if (barcode !== null) {
                    subscriber.next(barcode);
                }
            }, 500);
        });
    }

    public scanImage(image: HTMLImageElement): string {
        image.width = image.width || image.naturalWidth;
        image.height = image.height || image.naturalHeight;

        return this.scan(image);
    }

    private scan(media: HTMLImageElement | HTMLVideoElement): string {
        this.canvas.width = media.width;
        this.canvas.height = media.height;

        const barcode: string;

        this.context.drawImage(media, 0, 0);

        [1, 9, 2, 8, 3, 7, 4, 6, 5].every((position: number) => {
            const imageData: ImageData =
                this.context.getImageData(0,
                    Math.ceil(media.height / position), media.width, 1);

            barcode = this.processImageData(imageData);

            return barcode === null;
        });

        return barcode;
    }

    private processImageData(imageData: ImageData): string | null {
        const TRESHOLD_BLACK_WHITE = 127;

        const imageRawData: Uint8ClampedArray = imageData.data;
        const buffer: Array<number> = [];

        for (let i = 0; i < imageRawData.length; i += 4) { // RGBA
            const r = imageRawData[i];
            const g = imageRawData[i + 1];
            const b = imageRawData[i + 2];

            const avg: number = (r + g + b) / 3;
            const value: number = avg < TRESHOLD_BLACK_WHITE ? +1 : -1; // +1 => black, -1 => white
            const stripe = buffer[buffer.length - 1];

            if (stripe !== undefined && Math.sign(stripe) === Math.sign(value)) {
                buffer[buffer.length - 1] += value; // accumulate stripe thickness
            } else {
                buffer.push(value); // new stripe
            }

            if (!this.isBarcodeValid(buffer)) {
                return null;
            }
        }

        return this.decodeDigits(buffer);
    }

    /**
     * Checks if the barcode is valid
     *
     * A valid UPC barcode consists of:
     *  - quiet zone : width 9 modules = 0
     *  - start zone : 101
     *  - left part: 6 digits, each digit width 7 modules (2bars & 2spaces)
     *  - middle zone: 01010
     *  - right part: 6 digits, each digit width 7 modules (2bars & 2spaces)
     *  - end zone : 101
     *  - quiet zone : width 9 modules = 0
     *
     * @param buffer
     */
    private isBarcodeValid(buffer: Array<number>): boolean {
        let valid = true;

        // the black stripes
        [1, 3, 29, 31, 57, 59].forEach((position: number) => {
            if (buffer[position] < 0) {
                valid = false;
            }
        });

        // the whites stripes (not the band :p)
        [0, 2, 28, 30, 32, 58, 60].forEach((position: number) => {
            if (buffer[position] > 0) {
                valid = false;
            }
        });

        return valid;
    }

    /**
     * Decodes the digits of the barcode
     *
     * @param buffer
     */
    private decodeDigits(buffer: Array<number>): string {
        try {
            const module: number = (buffer[1] + Math.abs(buffer[2]) + buffer[3]) / 3;
            let ean13Prefix = '';

            // Decode left & right  part
            let barcode = buffer.filter((value: number, index: number): boolean => {
                return (index > 3 && index < 28) || (index > 32 && index < 57); // keep only digits
            }).map((value: number): number => {
                return Math.round(Math.abs(value / module));
            }).join('').match(/.{1,4}/g).map((value: string, index: number): string => {
                if (index < 6) {
                    ean13Prefix += BarcodeDecoder.UPC_SET[value] ? 'L' : 'G';
                }

                return BarcodeDecoder.UPC_SET[value] || BarcodeDecoder.UPC_SET[value.split('').reverse().join('')] || 'X';
            }).join('');

            barcode = (BarcodeDecoder.EAN13_PREFIX[ean13Prefix] || 'X') + barcode;

            console.log('barcode decoder - candidate: ', barcode);

            return barcode.indexOf('X') === -1 ? barcode : null;
        } catch (error) {
            return null;
        }
    }
}
