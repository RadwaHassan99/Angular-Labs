import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent {
  slideIndex = 0;
  intervalId: any;
  imagePaths = [
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
  ];

  ngOnInit() {
    this.showSlide(this.slideIndex);
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.imagePaths.length;
    this.showSlide(this.slideIndex);
  }

  previousSlide() {
    this.slideIndex =
      (this.slideIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
    this.showSlide(this.slideIndex);
  }

  startSlideShow() {
    this.intervalId = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.imagePaths.length;
      this.showSlide(this.slideIndex);
    }, 2000);
  }

  stopSlideShow() {
    clearInterval(this.intervalId);
  }

  showSlide(n: number) {
    const slides = document.getElementsByTagName('img');
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add('hidden');
    }
    slides[n].classList.remove('hidden');
  }

  isActive(imagePath: string) {
    return this.imagePaths[this.slideIndex] === imagePath;
  }
}
