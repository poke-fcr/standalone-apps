import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  noBtnVisible = false;
  buttonPosition = { top: 0, left: 0 };
  visibleAreaWidth: number = 0;
  visibleAreaHeight: number = 0;
  ngOnInit() {
    anime
      .timeline()
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
      })
      .add({
        targets: '.ml11 .line',
        translateX: [
          0,
          document.querySelector('.ml11 .letters')?.getBoundingClientRect()
            ?.width || 0 + 50,
        ],
        easing: 'easeOutExpo',
        duration: 600,
        delay: 300,
      })
      .add(
        {
          targets: '.ml11 .letters',
          opacity: [0, 1],
          translateX: [-100, 0],
          easing: 'linear',
          duration: 1000,
        },
        '-=500'
      )
      .add({
        targets: '#yes',
        opacity: [0, 1],
        translateX: [-100, 0],
        easing: 'linear',
        duration: 1000,
      })
      .add(
        {
          targets: '#no',
          opacity: [0, 1],
          translateX: [100, 0],
          easing: 'linear',
          duration: 1000,
        },
        '-=1000'
      )
      .add({
        targets: '.ml11 .line',
        opacity: [1, 0],
        easing: 'easeOutExpo',
        duration: 600,
      });
  }

  ngAfterViewInit() {
    this.visibleAreaWidth = window.innerWidth;
    this.visibleAreaHeight = window.innerHeight;
  }

  randomizeButtonPosition() {
    const randomTop = Math.floor(Math.random() * (this.visibleAreaHeight - 50)); // Adjust 50 based on button height
    const randomLeft = Math.floor(Math.random() * (this.visibleAreaWidth - 50)); // Adjust 50 based on button width
    this.buttonPosition = { top: randomTop, left: randomLeft };
  }
}
