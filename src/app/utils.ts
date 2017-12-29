export class Utils {

    public static deepCopy(object: Object): Object {
        return JSON.parse(JSON.stringify(object));
    }

    public static toISBN10(isbn13: string): string {
        const sum: number = isbn13
            .slice(3, 12)
            .split('')
            .map(digit => parseInt(digit, 10))
            .reduce((previousValue, currentValue, currentIndex): number => {
                return previousValue + (currentValue * Math.abs(currentIndex - 10));
            }, 0);

        const checkdigit: number = (11 - (sum % 11)) % 11;
        const isbn10: string = isbn13.slice(3, 12) + (checkdigit === 10 ? 'X' : checkdigit);

        return isbn10;
    }
}
