# nativescript-epub-reader
NativeScript plugin to open and read ePub files natively. 

## Getting Started
* `npm install nativescript-pdf`
* For iOS Place your `epub` files in your `App_Resources/iOS` directory.
* For Android, required absolute file path as parameter.
* Import `EPubReader` in your page and open the file.


## Android Permissions Required

```javascript
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

### AndroidManifest

Starting with Android 9.0 (API level 28), cleartext support is disabled by default.

{your-app-module}/res/xml/network_security_config.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">127.0.0.1</domain>
        <domain includeSubdomains="true">localhost</domain>
    </domain-config>
</network-security-config>
```

Then add network_security_config.xml in your app module's AndroidManifest.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    ...
    <application android:networkSecurityConfig="@xml/network_security_config">
    ...
    </application>
</manifest>
```

### Code Sample
```
import {Observable} from 'data/observable';
import {EPubReader} from 'nativescript-epub';
import * as application from "tns-core-modules/application";

export class HelloWorldModel extends Observable {

  constructor() {
    super();
    let ePubReader = new EpubReader();
    if (application.android) {
        ePubReader.open('/storage/emulated/0/Download/Metamorphosis-jackson.epub');
    }else{
        ePubReader.open('book');
    }
  }

}
```

## IOS Demo
![Image](http://g.recordit.co/ooKqhz4efk.gif)

## Android Demo
##### Custom Fonts
![Custom fonts](https://cloud.githubusercontent.com/assets/1277242/19012915/0661c7b2-87e0-11e6-81d6-8c71051e1074.gif)
##### Day and Night Mode
![Day night mode](https://cloud.githubusercontent.com/assets/1277242/19012914/f42059c4-87df-11e6-97f8-29e61a79e8aa.gif)
##### Text Highlighting 
![Highlight](https://cloud.githubusercontent.com/assets/1277242/19012904/c2700c3a-87df-11e6-97ed-507765b3ddf0.gif)
##### Media Overlays 
![Media Overlay](https://cloud.githubusercontent.com/assets/1277242/19012908/d61f3ce2-87df-11e6-8652-d72b6a1ad9a3.gif)

## Credits
* https://github.com/FolioReader/FolioReaderKit
* https://github.com/FolioReader/FolioReader-Android


## License

Apache License Version 2.0, January 2004