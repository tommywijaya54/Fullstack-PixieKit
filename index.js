// Import stylesheets
import { PixieDust } from './PixieKit/engine/pixiedust.js';
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class PixieEngine {
  readfile(fileAsText) {
    var text, parser, xmlDoc;
    text =
      '<bookstore><book>' +
      '<title>Everyday Italian</title>' +
      '<author>Giada De Laurentiis</author>' +
      '<year>2005</year>' +
      '</book></bookstore>';

    parser = new DOMParser();
    xmlDoc = parser.parseFromString(text, 'text/xml');

    var reader = new FileReader();
    return fileAsText;
  }
}
const PD = new PixieDust();
const eng = new PixieEngine();
appDiv.innerHTML = eng.readfile(PD.file);
