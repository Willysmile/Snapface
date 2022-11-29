import {Component, OnInit, Input} from '@angular/core';
import {FaceSnap} from "../models/face-snap.model";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;


  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  snapped!: boolean
  buttonText!: string;
  imageUrl!: string;

  ngOnInit() {
    
    this.snapped = false;
    this.buttonText = "Oh Snap!";
  }

  onSnap() {
    if (!this.snapped) {
      this.snapped = !this.snapped;
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!";
    } else {
      this.snapped = !this.snapped;
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!";
    }

  }
}
