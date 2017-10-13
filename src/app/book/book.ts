export class Book {
    private _isbn: string;
    private _title: string;
    private _author: string;
    private _rating: number;
    private _cover: string;
    private _description: string;

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

    public get isbn() {
        return this._isbn;
    }

    public set isbn(isbn: string) {
        this._isbn = isbn;
    }

    public get description() {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }
}