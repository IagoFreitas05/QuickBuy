import { Component } from '@angular/core';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent
{
  public image = '../../assets/quickbuy.png';
  public usuario: Usuario;

  constructor()
  {
    this.usuario = new Usuario();
  }

  entrar(): void
  {
    
  }
}
