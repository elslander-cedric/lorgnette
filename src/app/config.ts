export class Config {
    private _captureMode : string;
    private _goodreadsAPIKey: string;
    private _goodreadsUID: string;

    public get captureMode() {
        return this._captureMode;
    }

    public get goodreadsAPIKey() {
        return this._goodreadsAPIKey;
    }

    public get goodreadsUID() {
        return this._goodreadsUID;
    }
}