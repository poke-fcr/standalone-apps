import { Component, OnInit } from '@angular/core';
import { child, get, getDatabase, ref } from 'firebase/database';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
data: any = null
    ngOnInit() {
      const dbRef = ref(getDatabase());
      get(child(dbRef, `users`))
        .then((snapshot) => {
          if (snapshot.exists()) {
           this.data = snapshot.val()
          } else {
            console.log('No data available');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
}
