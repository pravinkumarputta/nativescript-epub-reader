import { topmost } from 'tns-core-modules/ui/frame';

declare var FolioReaderConfig: any,
    FolioReaderContainer: any,
    FolioReader: any;
export class EpubReader {
    private _config: any;

    constructor() {
        this._config = new FolioReaderConfig();
    }
    get() {
        let version = NSBundle.mainBundle.objectForInfoDictionaryKey("CFBundleShortVersionString");
        return version;
    }
    open(fileName: string) {
        let bookPath = NSBundle.mainBundle.pathForResourceOfType(fileName, 'epub') || fileName;
        FolioReader.presentReaderWithParentViewControllerWithEpubPathAndConfigShouldRemoveEpubAnimated(
            topmost().currentPage.ios,
            bookPath,
            this._config,
            false,
            true
        );
    }
}
