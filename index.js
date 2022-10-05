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

class DustCode extends String {
  removeComment = function () {};
  findTag = function () {
    // by default it will find first pair of tag
    const opening_closure_tag_index = this.indexOf('<');
    const closing_closure_tag_index = this.indexOf('>');
    const opening_tag_name = this.substring(
      opening_closure_tag_index + 1,
      closing_closure_tag_index
    );

    const opening_tag = `<${opening_tag_name}>`;
    const closing_tag = `</${opening_tag_name}>`;

    // checking if it's a pair or self closing tag;

    console.log('opening tag => \n\n\n', opening_tag);
    console.log('closing tag => \n\n\n', closing_tag);
    console.log('tag name => \n\n\n', opening_tag_name);
  };
}

String.prototype.toSchema = function () {};

file.findTag();

log = file; //file.indexOf('<app ');

// Second setup environment & app application

console.log(log);
