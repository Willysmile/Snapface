import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
title!: string;
description!: string;
createdDate!: Date;
snaps!: number;
snapped!:boolean
buttonText!:string;
imageUrl!: string;

ngOnInit() {
  this.title = 'Bébé Tigre Blanc';
  this.description = 'Une peluche au Zoo de Pessac';
  this.createdDate = new Date();
  this.snaps = 7;
  this.imageUrl = 'https://live.staticflickr.com/3428/3808485369_41e53c9333_h.jpg'
  this.snapped = false;
  this.buttonText = "Oh Snap!";
}
onSnap(){
 if (!this.snapped) {
   this.snapped = !this.snapped;
   this.snaps++;
   this.buttonText = "Oops, un Snap!";
 }
 else {
   this.snapped = !this.snapped;
   this.snaps--;
   this.buttonText = "Oh Snap!";
 }

}
}
