export class PixieDust {
  constructor() {
    this.tinyfile = `
    <app-environment>
    Hello
    </app-environment>
    `;

    this.file = `
    // Load App Environment
<app-environment>
  <default
    title='Willow Tree'
    database='mysql:url:username:password'
  >
  </default>
  <production
    title='Forest of Fairy'
    database='mysql:url:username:password'
  >
</app-environment>

// App
<app name='todo' route='/'>
  <server>
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
      <div>
        Template {app.title}
      </div>
    </html>
  </frontend>
</app>
    `;
  }
}
