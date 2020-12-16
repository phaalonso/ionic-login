import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public user: string;
  public senha: string;

  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    if (this.autenticacaoService.login(this.user, this.senha)) {
      this.router.navigate(['/home']);
    } else {
      console.log('Não foi possível logar');
      
    }
  }

}
