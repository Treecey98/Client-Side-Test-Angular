import { ApplicationRef, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import lib from './assets/model.js';

@Component({
  selector: 'library-components',
  imports: [ScrollingModule],
  standalone: true,
  template: `
    <div>
    <h4>Categories</h4>
      <input type="text" placeholder="Search applets" class="applets-search" (input)="filterApplets($event)">
      <ul>
        @for (category of categoryList; track category){
          @if (this.userInput == ""){
          <div class="categories">
            <button (click)="changeCategory(category)">{{category}} </button>
            <span class="number-of-applets">{{numberOfApplets(category)}}</span>
          </div>
          } @else if (this.userInput != "" && filteredNumberOfApplets(category) > 0) {
          <div class="categories">
            <button>{{category}}</button>
            <span class="number-of-applets">{{filteredNumberOfApplets(category)}}</span>
          </div>
          }
        }
      </ul>
    </div>
    <div class="applets-container">
      <h4>Applets</h4>
      <ul>
          @if (clicked){
            @for (applet of filteredApplets; track applet.name){
              <li class="applets-list">{{applet.name}}</li>
            }
          } @else if (userInput != "") {
            @for (applet of filteredApplets; track applet.name){
              <li class="applets-list">{{applet.name}}</li>
            }
          }
      </ul>
    </div>
  `,
  styleUrl: './global_styles.css',
})
export class LibraryComponents {
  categoryList = lib['categories'];
  appletsList = lib['applets'];

  filteredApplets: any = [];

  userInput: string = '';

  clicked: boolean = false;

  changeCategory(selectedCategory: string) {
    this.filteredApplets = this.appletsList.filter((applet: any) => applet['categories'].includes(selectedCategory))
    this.clicked = true;
  }

  numberOfApplets(category: string) {
    const number = this.appletsList.filter((applet: any) => applet['categories'].includes(category)).length
    
    return number
  }

  filterApplets($event: any) {
    this.clicked = false;
    const data = $event.target.value;
    this.filteredApplets = this.appletsList.filter((applet: any) => applet['name'] == data)
    this.userInput = data;
  }

  filteredNumberOfApplets(category: string) {
    const number = this.appletsList.filter((applet: any) => applet['categories'].includes(category) && applet['name'] == this.userInput).length

    return number;
  }
}

