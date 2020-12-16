import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private autenticacao: AutenticacaoService) {}
  
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    if (!this.autenticacao.isLogado()) {
      this.router.navigate(['/login']);
    }
  }
}
