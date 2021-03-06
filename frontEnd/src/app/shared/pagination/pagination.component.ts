import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

    @Input() page: number; // the current page
    @Input() count: number; // how many total items there are in all pages
    @Input() perPage: number; // how many items we want to show per page

    @Output() goPrev: EventEmitter<any> = new EventEmitter();
    @Output() goNext: EventEmitter<any> = new EventEmitter();
    @Output() goPage: EventEmitter<any> = new EventEmitter();

    pagesToShow: number = 5; // how many pages between next/prev

    constructor() {}

    getMin(): number {
        return ((this.perPage * this.page) - this.perPage) + 1;
    };

    getMax(): number {
        let max = this.perPage * this.page;
        if (max > this.count) {
            max = this.count;
        }
        return max;
    };

    onPage(n: number): void {
        this.goPage.emit(n);
    };

    onPrev(): void {
        this.goPrev.emit(true);
    };

    onNext(): void {
        this.goNext.emit(true);
    };

    totalPages(): number {
        return Math.ceil(this.count / this.perPage) || 0;
    };

    lastPage(): boolean {
        return this.perPage * this.page > this.count;
    };

    getPages(): number[] {
        const c = Math.ceil(this.count / this.perPage);
        const p = this.page || 1;
        const pagesToShow = this.pagesToShow || 9;
        const pages: number[] = [];
        pages.push(p);
        const times = pagesToShow - 1;
        for (let i = 0; i < times; i++) {
            if (pages.length < pagesToShow) {
                if (Math.min.apply(null, pages) > 1) {
                    pages.push(Math.min.apply(null, pages) - 1);
                }
            }
            if (pages.length < pagesToShow) {
                if (Math.max.apply(null, pages) < c) {
                    pages.push(Math.max.apply(null, pages) + 1);
                }
            }
        }
        pages.sort((a, b) => a - b);
        return pages;
    };
}
