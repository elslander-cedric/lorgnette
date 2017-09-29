export class Book {

    private _title : string;
    private _author : string;
    private _rating : number;
    private _cover : string;

    public get title() {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get author() {
        return this._author;
    }

    public set author(author: string) {
        this._author = author;
    }

    public get rating() : number {
        return this._rating;
    }

    public set rating(rating : number) {
        this._rating = rating;
    }
    
    public get cover() {
        return this._cover;
    }

    public set cover(cover: string) {
        this._cover = cover;
    }    

}