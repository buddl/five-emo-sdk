/* The one and only JS SDK class
*/

const origin = "https://www.5emotions.de/";

class FiveEmo {

    elementid = 'fiveemo_id';
    objectid;
    mode = "popup";
    width = '200px';
    height= '50px';

    constructor(args) {

        if (!args) {
            console.error("Missing arguments !");
            return;
        }

        this.objectid = args.objectid;
        if (!this.objectid || ((typeof this.objectid !== 'string' && !(this.objectid instanceof String))) || (this.objectid.length < 3)) {
            console.error("Missing objectid ! objectid must be string.");
            return;
        }

        if (args.elementid && ((typeof args.elementid === 'string' || (args.elementid instanceof String))) && (args.elementid.length > 1)) {
            this.elementid = args.elementid;
        }

        if (args.mode && ((typeof args.mode === 'string' || (args.mode instanceof String))) && (args.mode.length > 1)) {
            this.mode = args.mode;
        }
        if (args.width && ((typeof args.width === 'string' || (args.width instanceof String))) && (args.width.length > 1)) {
            this.width = args.width;
        }
        if (args.height && ((typeof args.height === 'string' || (args.height instanceof String))) && (args.height.length > 1)) {
            this.height = args.height;
        }

        var element = document.getElementById(this.elementid);
        if (!element) {
            console.error("element id not found: ", this.elementid);
            return;
        }
        let url = `${origin}${this.objectid}`;
        if (this.mode === "kiosk") {
            url = `${origin}kiosk/${this.objectid}`;
        }

        let framename = 'fiveemo_frame_id';
        let formname = 'fiveemo_hidden_form_id';
        var frm;
        while (frm = document.getElementById(framename)) {
            framename = framename + '1';
            formname = formname + 1;
        }

        if (this.mode === "popup") {
            element.innerHTML = `<a href='${url}?m=popup' target='fiveemo_popup' style='cursor: pointer; padding: 2px;' (click)='window.open('${url}?m=popup', "fiveemo_popup", "menubar=no, toolbar=no, location=no, scrollbars=no, width=800, height=600, status=no, resizable=yes, top=0, left=0, dependent=yes, alwaysRaised=yes"' ><img src='${origin}assets/icons/5emotions-button-100x25.png' ></a>`;
        } else if ((this.mode === "iframe") || (this.mode === "kiosk")) {
            element.innerHTML = `<iframe id='${framename}' name='${framename}' src="${url}" width='${this.width}' height='${this.height}' onload='var win5emo = window.frames.${framename}; var dat = {parent: window.location.href}; win5emo.postMessage(dat, "${origin}");' frameborder='0' allow='accelerometer; gyroscope' allowfullscreen allowTransparency="true"></iframe>`;
        }
    }
}
