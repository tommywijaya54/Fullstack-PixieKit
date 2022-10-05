// Import stylesheets
import { PixieDust } from './PixieKit/engine/pixiedust.js';
import { XMLtoJSON } from './PixieKit/engine/vendor/xmltojson.js';
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class PixieEngine {
  readfile(fileAsText) {
    let parser, doc;

    // parser = new DOMParser();
    // doc = parser.parseFromString(fileAsText, 'text/xml');
    const toJson = new XMLtoJSON();
    const x = toJson.fromStr(fileAsText);
    console.log(x);
    window.xx = x;
    return 'xxx';
  }
}
const PD = new PixieDust();
const eng = new PixieEngine();
appDiv.innerHTML = eng.readfile(PD.file);
