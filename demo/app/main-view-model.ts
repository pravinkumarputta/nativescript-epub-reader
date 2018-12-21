import { Observable } from 'tns-core-modules/data/observable';
import { EpubReader } from 'nativescript-epub-reader';

export class HelloWorldModel extends Observable {
  public message: string;
  private epubReader: EpubReader;
  constructor() {
    super();

    this.epubReader = new EpubReader();
    this.message = this.epubReader.get();
  }
}
