// Import stylesheets
import { PixieDust } from './PixieKit/engine/pixiedust.js';
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class PixieEngine {
  readfile(fileAsText) {
    let parser, doc;

    parser = new DOMParser();
    doc = parser.parseFromString(fileAsText, 'text/xml');
    console.log(doc.getElementsByTagName('app').name);
    return doc.app['name'];
  }
}
const PD = new PixieDust();
const eng = new PixieEngine();
appDiv.innerHTML = eng.readfile(PD.file);
