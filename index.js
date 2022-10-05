// Import stylesheets
import { PixieDust } from './PixieKit/engine/pixiedust.js';
import { XMLtoJSON } from './PixieKit/engine/vendor/xmltojson.js';
import './style.css';

// Write Javascript code!
let log = '';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const Pixie = new PixieDust();
let file = Pixie.file;
// console.log(Pixie.file);

// find tag set
// tag can be : <p> & </p>
// tag can be : <h title='ssss'>

// First turn text to easy readable json
// // read first <
file = file
  .split('\n')
  .filter((st) => !st.includes('//'))
  .join('\n'); // removing comment

String.prototype.findTag = function () {
  // by default it will find first pair of tag

  console.log('xxx => ', this);
};

file.findTag();

log = file; //file.indexOf('<app ');

// Second setup environment & app application

console.log(log);
