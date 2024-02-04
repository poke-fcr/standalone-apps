import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'standalone-apps';
  

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyC1068JtV4Sifq1aFBUuBXYUY9zQK6hke4",
      authDomain: "standalone-apps-1998.firebaseapp.com",
      projectId: "standalone-apps-1998",
      storageBucket: "standalone-apps-1998.appspot.com",
      messagingSenderId: "259467626106",
      appId: "1:259467626106:web:ad5b191f30f1a300ccddc3",
      measurementId: "G-7KTJ6BDHJF",
      databaseURL: "https://standalone-apps-1998-default-rtdb.asia-southeast1.firebasedatabase.app"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
