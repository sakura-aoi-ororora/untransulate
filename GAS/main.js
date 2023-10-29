var ErrorData = /** @class */ (function () {
    function ErrorData(message) {
        this.text = "Error";
        this.message = message;
    }
    return ErrorData;
}());
var OkData = /** @class */ (function () {
    function OkData(message) {
        this.text = "Ok";
        this.message = message;
    }
    return OkData;
}());
function doGet(e) {
    var getdata = e.parameter;
    var data = { text: getdata.text, languages: JSON.parse(getdata.languages) };
    for (var i = 0; i < data.languages.length; i++) {
        var element = data.languages[i];
        if (element === "") {
            return JSON.stringify(new ErrorData("not use \"\". use \"auto\"."));
        }
        if (i !== 0 && element === "auto") {
            return JSON.stringify(new ErrorData("not use \"auto\" in this place."));
        }
        else if (i === 0 && element === "auto") {
            data.languages[i] = "";
        }
    }
    var langList = data.languages;
    var str = data.text;
    // eslint-disable-next-line no-constant-condition
    while (true) {
        if (langList.length <= 1) {
            break;
        }
        var sourceLang = langList[0];
        var targetLang = langList[1];
        str = LanguageApp.translate(str, sourceLang, targetLang);
        langList.shift();
    }
    return JSON.stringify(new OkData(str));
}
