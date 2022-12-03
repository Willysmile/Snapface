import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Bébé Tigre Blanc',
        description: 'Une peluche au Zoo de Pessac',
        imageUrl: 'https://live.staticflickr.com/3428/3808485369_41e53c9333_h.jpg',
        createdDate: new Date(),
        snaps: 7,
        location: 'Pessac'
      },
      {
        title: 'Petit Panda',
        description: 'Une autre peluche au Zoo de Pessac',
        imageUrl: 'https://live.staticflickr.com/2670/3808442547_1e9b58b3ed_h.jpg',
        createdDate: new Date(),
        snaps: 100,
        location: 'Bordeaux'
      },
      {
        title: 'Ara Chloroptère',
        description: 'Un Ara au Zoo de Pessac',
        imageUrl: 'https://live.staticflickr.com/3534/3808455211_8571d30550.jpg',
        createdDate: new Date(),
        snaps: 2,
      }
    ]

  }
}
