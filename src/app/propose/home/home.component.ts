import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import anime from 'animejs/lib/anime.es';
import { EncryptDecryptService } from '../encrypt-decrypt.service';
import { child, get, getDatabase, ref, set } from 'firebase/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  noBtnVisible = false;
  images = [
    './../../../assets/feb/panda hello.png',
    './../../../assets/feb/panda happy.png',
    './../../../assets/feb/panda sad 2.png',
  ];
  buttonPosition = { top: 0, left: 0 };
  visibleAreaWidth: number = 0;
  visibleAreaHeight: number = 0;
  pageStatus: 'loading' | 'loaded' | 'failed' | 'yes' = 'loading';
  pathValue: string = '';
  yesCount: number = 0;
  noCount: number = 0;

  constructor(
    private encryptSvc: EncryptDecryptService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadImages();
    this.route.queryParamMap.subscribe((value: ParamMap) => {
      this.pathValue = value.get('v') || '';
      console.log(this.pathValue);
    });
    const dbRef = ref(getDatabase());
    if (this.pathValue.length) {
      get(child(dbRef, `users/${this.pathValue}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            this.noCount = snapshot.val().noCount || 0
            this.yesCount = snapshot.val().yesCount || 0
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  ngAfterViewInit() {
    this.visibleAreaWidth = window.innerWidth;
    this.visibleAreaHeight = window.innerHeight;
  }

  randomizeButtonPosition() {
    this.showImage(2);
    this.noCount+=1
    this.writeUserData();
    const randomTop = Math.floor(
      Math.random() * (this.visibleAreaHeight - 150)
    ); // Adjust 50 based on button height
    const randomLeft = Math.floor(
      Math.random() * (this.visibleAreaWidth - 150)
    ); // Adjust 50 based on button width
    this.buttonPosition = { top: randomTop, left: randomLeft };
  }

  startTransition() {
    anime
      .timeline()
      // .add({
      //   targets: '.ml11 .line',
      //   scaleY: [0, 1],
      //   opacity: [0.5, 1],
      //   easing: 'easeOutExpo',
      //   duration: 700,
      // })
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

  imageContainer: HTMLDivElement = document.createElement('div');
  loadImages() {
    for (let i = 0; i < this.images.length; i++) {
      let img = new Image();
      img.onload = () => {
        this.loadedFunc();
        img.width = i == 2 ? 172 : 212;
        img.hidden = true;
        img.id = 'img-' + i;
        this.imageContainer?.appendChild(img);
      };
      img.src = this.images[i];
    }
  }

  loaded = 0;
  loadedFunc() {
    this.loaded++;
    if (this.images.length == this.loaded) {
      this.pageStatus = 'loaded';
      console.log(document.getElementById('imageContainer'));
      setTimeout(() => {
        document
          .getElementById('imageContainer')
          ?.appendChild(this.imageContainer);
        this.showImage(0);
        this.startTransition();
      }, 1000);
    }
  }

  showImage(index: number) {
    for (let i = 0; i < this.images.length; i++) {
      let img = document.getElementById('img-' + i);
      if (img) {
        if (i === index) {
          img.hidden = false;
        } else {
          img.hidden = true;
        }
      }
    }
  }

  yesClick() {
    this.pageStatus = 'yes';
    this.yesCount+=1
    this.writeUserData();
  }

  writeUserData() {
    if (this.pathValue.length) {
      const db = getDatabase();
      set(ref(db, 'users/' + this.pathValue), {
        yesCount: this.yesCount,
        noCount: this.noCount,
        lastUpdated: new Date().toLocaleDateString()
      });
    }
  }
}
