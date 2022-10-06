// Import stylesheets
import { PixieDust } from './PixieKit/engine/pixiedust.js';
import { XMLtoJSON } from './PixieKit/engine/vendor/xmltojson.js';
import './style.css';

// Write Javascript code!
let log = '';
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const Pixie = new PixieDust();
let file = Pixie.tinyfile;
// console.log(Pixie.file);

// find tag set
// tag can be : <p> & </p>
// tag can be : <h title='ssss'>

// First turn text to easy readable json
// // read first <
/*
file = file
  .split('\n')
  .filter((st) => !st.includes('//'))
  .join('\n'); // removing comment
  */

class DustCode {
  constructor(code) {
    this.code = code;
    this.removeComment();

    this.json = {};
    this.convert(this.code, this.json);
  }
}
DustCode.prototype.convert = function (str, json) {
  let tag = this.findTag(str);
  if (tag.tag_name) {
    json[tagname] = tag.text_content;
  }
};
DustCode.prototype.removeComment = function () {
  this.code = this.code
    .split('\n')
    .filter((st) => !st.includes('//'))
    .join('\n'); // removing comment
};

DustCode.prototype.findTag = function (code) {
  let strCode = code || this.code;
  // by default it will find first pair of tag
  const opening_closure_tag_index = strCode.indexOf('<');
  const closing_closure_tag_index = strCode.indexOf('>');
  const opening_tag_name = strCode.substring(
    opening_closure_tag_index + 1,
    closing_closure_tag_index
  );

  const opening_tag = `<${opening_tag_name}>`;
  const closing_tag = `</${opening_tag_name}>`;

  return {
    tag_name: opening_tag_name,
    text_content: strCode.replace,
  };
  // checking if it's a pair or self closing tag;
  // console.log('opening tag => \n\n\n', opening_tag);
  // console.log('closing tag => \n\n\n', closing_tag);
  // console.log('tag name => \n\n\n', opening_tag_name);
};
file = new DustCode(file);
file.findTag();

String.prototype.toSchema = function () {};

log = file.code; //file.indexOf('<app ');

// Second setup environment & app application

console.log(log);
