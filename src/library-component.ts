import { Component } from '@angular/core';
import lib from './assets/model.js';

@Component({
  selector: 'library-components',
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
          @for (applet of appletsList; track applet.name){
            @if (applet.categories.includes(this.category) && this.userInput == ""){
              <li class="applets-list">{{applet.name}}</li>
            } @else if (this.userInput == applet.name){
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

  category: string = '';

  userInput: string = '';

  changeCategory(selectedCategory: string) {
    this.category = selectedCategory;
  }

  numberOfApplets(category: string) {
    let count: number = 0;

    this.appletsList.forEach((applet: any) => {
      if (applet['categories'].includes(category)) {
        count++;
      }
    });

    return count;
  }

  filterApplets($event: any) {
    const data = $event.target.value;
    this.userInput = data;
  }

  filteredNumberOfApplets(category: string) {
    let count: number = 0;

    this.appletsList.forEach((applet: any) => {
      if (
        applet['categories'].includes(category) &&
        applet['name'] == this.userInput
      ) {
        count++;
      }
    });

    return count;
  }
}
