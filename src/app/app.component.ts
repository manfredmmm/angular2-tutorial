import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-form></app-form>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'Hello world!';
}
