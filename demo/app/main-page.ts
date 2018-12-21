import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { Button } from "tns-core-modules/ui/button";
import * as application from "tns-core-modules/application";
import { EpubReader } from 'nativescript-epub-reader';

let filePath = "/storage/emulated/0/Download/Metamorphosis-jackson.epub";
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onSelectFiles(args: observable.EventData) {
    let button = <Button>args.object;
    let ePubReader = new EpubReader();
    if (application.android) {
        ePubReader.open(filePath);
    }
    console.log('clicked');
}
