import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private logado =  false;

  constructor() { }

  login(user: string, password: string): boolean {
    if (user == password) {
      this.logado = true;
      return true;
    }

    this.logado = false;
    return this.logado;
  }

  logout() {
    this.logado = false;
  }

  isLogado() {
    return this.logado;
  }

}
