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

imageUrl!: string;

ngOnInit() {
  this.title = 'Bébé Tigre Blanc';
  this.description = 'Une peluche au Zoo de Pessac';
  this.createdDate = new Date();
  this.snaps = 7;
  this.imageUrl = 'https://live.staticflickr.com/3428/3808485369_41e53c9333_h.jpg'
}
}
