import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[book-card-selected]'
})
export class BookCardSelectedDirective implements OnInit {

    @Input('book-card-selected') selected: any;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2) {}

    ngOnInit() {
        if(this.selected) {
            this.renderer.addClass(this.element.nativeElement.childNodes[0], 'selected');
        }
    }

    @HostListener('mouseenter', ['$event.target']) onmouseenter(book): boolean {
        console.log('book mouse enter:', book);

        return true;
    }

    private setSelected(selected: boolean): void {
        this.element.nativeElement.class = `[${selected ? 'selected' : ''}]`;
    }

}