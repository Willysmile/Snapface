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
    this.mySnap = new FaceSnap(
      'Bébé Tigre Blanc',
      'Une peluche au Zoo de Pessac',
      'https://live.staticflickr.com/3428/3808485369_41e53c9333_h.jpg',
      new Date(),
      7,
    );
    this.myOtherSnap = new FaceSnap(
      'Petit Panda',
      'Une autre peluche au Zoo de Pessac',
      'https://live.staticflickr.com/2670/3808442547_1e9b58b3ed_h.jpg',
      new Date(),
      5,
    );
    this.myLastSnap = new FaceSnap(
      'Ara Chloroptère',
      'Un Ara au Zoo de Pessac',
      'https://live.staticflickr.com/3534/3808455211_8571d30550.jpg',
      new Date(),
      2,
    );
  }
}
