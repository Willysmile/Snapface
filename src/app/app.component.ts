import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myLastSnap!: FaceSnap;
  myOtherSnap!: FaceSnap;

  ngOnInit() {
    this.mySnap = {
      title: 'Bébé Tigre Blanc',
      description: 'Une peluche au Zoo de Pessac',
      imageUrl: 'https://live.staticflickr.com/3428/3808485369_41e53c9333_h.jpg',
      createdDate: new Date(),
      snaps: 7,
      location: 'Pessac'
    };
    this.myOtherSnap = {
      title: 'Petit Panda',
      description: 'Une autre peluche au Zoo de Pessac',
      imageUrl: 'https://live.staticflickr.com/2670/3808442547_1e9b58b3ed_h.jpg',
      createdDate: new Date(),
      snaps: 5,
      location: 'Bordeaux'
    };
    this.myLastSnap = {
      title: 'Ara Chloroptère',
      description: 'Un Ara au Zoo de Pessac',
      imageUrl: 'https://live.staticflickr.com/3534/3808455211_8571d30550.jpg',
      createdDate: new Date(),
      snaps: 2,
    };
  }
}
