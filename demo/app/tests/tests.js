var EpubReader = require("nativescript-epub-reader").EpubReader;
var epubReader = new EpubReader();

describe("greet function", function() {
    it("exists", function() {
        expect(epubReader.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(epubReader.greet()).toEqual("Hello, NS");
    });
});