import { Component, OnInit } from '@angular/core';
import { Developer } from 'src/app/classes/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  developer!: Developer;
  constructor() { }

  ngOnInit(): void {
    this.developer = new Developer();
    this.developer.lastName = 'John';
    this.developer.firstName = 'MacLane';
    this.developer.age = 50;
    this.developer.sexe = 'Masculin';
    this.developer.bio = 'Anciennement John McClane de la police de New York.';
    this.developer.skills = [
      {
        name: 'HTML5',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
        site: 'https://www.w3.org/TR/html52/'},
      {
        name: 'CSS3',
        logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png',
        site: 'https://www.w3.org/Style/CSS/Overview.fr.html'},
      {
        name: 'Bootstrap',
        logo: 'https://user-images.githubusercontent.com/2327532/39481401-fa7d2992-4d30-11e8-886d-c4a3ee88147f.png',
        site: 'https://getbootstrap.com/'},
      {
        name: 'AngularJS 7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png',
        site: 'https://angular.io/'
      }];
  }

}
