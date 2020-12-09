import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../modelo/usuario';
import { UsuarioServico } from '../../servicos/usuario/usuario.servico';

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
  public mensagem: string;
  private ativar_spinner: boolean;

  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private usuarioServico: UsuarioServico,
    
   
  ){
      
  }

  ngOnInit(): void
  {
    this.returnUrl = this.activateRouter.snapshot.queryParams['returnUrl'];
    this.usuario = new Usuario();
  }

  entrar(): void
  {
    this.ativar_spinner = true;
    this.usuarioServico.verificarUsuario(this.usuario)
      .subscribe(
        usuario_json =>
        {
          this.ativar_spinner = false;
          this.usuarioServico.usuario = usuario_json;
          if (this.returnUrl == null)
          {
            this.router.navigate(['/']);
          }
          else
          {
            this.router.navigate([this.returnUrl]);
          }
        },
        err =>
        {
          this.ativar_spinner = false;
          this.mensagem = err.error;
        }
      );
  }
}
