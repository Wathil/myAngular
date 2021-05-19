import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './shared/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

  tabs: any[] = [
    {
      title: 'home',
      path: 'home'
    },
    {
      title: 'stagiaire',
      path: 'stagiaire'
    },
    {
      title: 'adresse',
      path: 'adresse'
    },
    {
      title: 'template-form',
      path: 'template-form'
    },
    {
      title: 'reactive-form',
      path: 'reactive-form'
    },
    {
      title: 'calculette',
      path: 'calculette'
    },
    {
      title: 'tp-form',
      path: 'tp-form'
    },
    {
      title: 'personne',
      path: 'personne'
    },
    {
      title: 'rocket',
      path: 'rocket'
    },
    {
      title: 'address-form',
      path: 'address-form'
    },
    {
      title: 'table',
      path: 'table'
    },
    {
      title: 'tree',
      path: 'tree'
    },
    {
      title: 'register',
      path: 'register'
    },
    {
      title: 'profile',
      path: 'profile'
    },
    {
      title: 'camion',
      path: 'vehicule/camion'
    },
    {
      title: 'voiture',
      path: 'vehicule/voiture'
    },
    {
      title: 'features',
      path: 'features'
    },
    {
      title: 'developer',
      path: 'developer'
    }
  ];

  logOut() {
    // localStorage.removeItem("isConnected");
    // this.router.navigateByUrl("/home");
    this.tokenStorageService.signout();
    window.location.reload();
  };

  isConnected() {
    if (Boolean(this.tokenStorageService.getToken()))
      return true;
    return false;
  }
}
