/* export class Facesnap {
  title: string;
  description: string;
  imageUrl: string;
  createdDate: Date;
  snaps: number;

  constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl;
  }

} */

export class FaceSnap {
  constructor(public title: string,
              public description: string,
              public imageUrl: string,
              public createdDate: Date,
              public snaps: number
  ) {
  }
}
