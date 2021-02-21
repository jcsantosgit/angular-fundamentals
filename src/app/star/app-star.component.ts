import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: '/app-star.component.html',
    styleUrls: ['./star.css']
})
export class StarComponent implements OnChanges {
    @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }
}