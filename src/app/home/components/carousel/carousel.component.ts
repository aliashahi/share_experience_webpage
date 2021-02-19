import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'EW-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  carouselIndex = 1;

  constructor() {}

  ngOnInit(): void {
    // setInterval(() => {
    //   this.onNext();
    // }, 10000);
  }

  onPrev() {
    this.carouselIndex = Math.abs(this.carouselIndex - 1) % 3;
  }

  onNext() {
    this.carouselIndex = Math.abs(this.carouselIndex + 1) % 3;
  }
}
