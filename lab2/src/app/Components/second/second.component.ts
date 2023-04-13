import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  slideIndex = 1;

  ngOnInit() {
    this.showSlide(this.slideIndex);
  }

  nextSlide() {
    this.showSlide(this.slideIndex += 1);
  }

  previousSlide() {
    this.showSlide(this.slideIndex -= 1);
  }

  showSlide(n:any) {
    let i;
    const slides = document.getElementsByTagName('img');
    if (n > slides.length) {this.slideIndex = 1;}
    if (n < 1) {this.slideIndex = slides.length;}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[this.slideIndex-1].style.display = 'block';
  }
}
