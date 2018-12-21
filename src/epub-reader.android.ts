import * as application from "tns-core-modules/application";
export class EpubReader {
    private folioReader: any;

    constructor() {
        this.folioReader = com.folioreader.FolioReader.get();
    }
    get() {
        let PackageManager = android.content.pm.PackageManager;
        let pkg = application.android.context.getPackageManager().getPackageInfo(application.android.context.getPackageName(),
            PackageManager.GET_META_DATA);
        return pkg.versionName;
    }
    open(fileName: string) {
        this.folioReader.openBook(fileName);
    }
}
