import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../modelo/usuario';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})

export class LoginComponent implements OnInit
{
  public image = '../../assets/quickbuy.png';
  public usuario: Usuario;
  public returnUrl: string;

  constructor(private router: Router, private activateRouter: ActivatedRoute)
  {
    
  }

  ngOnInit(): void
  {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar(): void
  {
    if (this.usuario.email == "iagofreitas05@gmail.com" && this.usuario.senha == "abc") {
      sessionStorage.setItem("usuario-autenticado", "1");
      this.router.navigate([this.returnUrl]);
    }
  }
}
