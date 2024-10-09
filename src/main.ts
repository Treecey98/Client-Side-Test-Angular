import { Component } from '@angular/core';
import { Title } from './title';
import { LibraryComponents } from './library-component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [Title, LibraryComponents],
  standalone: true,
  template: `
    <app-title></app-title>
    <library-components></library-components>
  `,
  styles: `
    library-components{
      display: flex;
    }
  `,
})
export class App {}

bootstrapApplication(App);
