import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  // @Input() : permet à un composant fils de récupérer des données du composant parent 
  // Elles devront être injectées dans le composant parent
  @Input() description !: string;
  @Input() icon !: string;
  @Input() title !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
