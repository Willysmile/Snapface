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

// @ts-ignore
export class FaceSnap {
  title!: string;
  description!: string;
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  public location?: string;
}
