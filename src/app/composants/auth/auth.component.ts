import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { TokenStorageService } from 'src/app/shared/token-storage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  // localStorage et sessionStorage
  // deux proprietes permettant d’acceder respectivement aux deux 
  // objets Storage et Session 
  // localStorage: stocke les donnees sans date d’expiration
  // sessionStorage: stocke les donnees pour une connexion 
  // (les donnees sont perdues lorsque l’onglet du navigateur est ferme)

  form: any = {
    username: null,
    password: null
  }

  isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = "";

  constructor(private router: Router, private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
  }

  // Se connecte si les credentials (username+password) sont corrects et redirige 
  // vers le composant personne, sinon affiche le message d'erreur (.html)
  isAuthenticated() {
    const {username, password} = this.form;
    this.authService.login(username, password).subscribe(data => {
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);

      this.isLoggedIn = true;
      this.isLoginFailed = false;
      this.router.navigateByUrl('/home');
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    });
  }
}
