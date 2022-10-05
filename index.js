// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class PixieEngine {
  readfile() {
    var reader = new FileReader();
    return 'Pixie Dust';
  }
}

const eng = new PixieEngine();
appDiv.innerHTML = eng.readfile();
