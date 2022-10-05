export class PixieDust {
  constructor() {
    this.file = `
    <app name='todo' route='/'>
  <server>
    <database>
        Database
    </database>
    <model>
        Model
    </model>
    <controller>
        Controller 
    </controller>
  </server>
  <frontend>
    <js>
      Js File
    </js>

    <css>
      Css File
    </css>
    
    <html>
      Hello
      <div>
        Template
      </div>
    </html>
  </frontend>
</app>
    `;
  }
}
