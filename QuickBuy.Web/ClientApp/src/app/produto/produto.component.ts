import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../modelo/Produto";
import { ProdutoServico } from "../servicos/produto/produto.servico";

@Component({
  selector: "app-produto",
  templateUrl: "./produto.component.html",
  styleUrls: ["./produto.component.css"],
})
export class ProdutoComponent implements OnInit{
  public produto: Produto;
  public ativar_spinner: boolean;
  public arquivoSelecionado: File;
  public mensagem: string;

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    
  }

  ngOnInit(): void {

    var produtoSession = sessionStorage.getItem('produtoSession');
    if (produtoSession)
    {
      this.produto = JSON.parse(produtoSession);
    }
    else
    {
      this.produto = new Produto();
    }
  }

  public inputChange(files: FileList) {
    this.ativar_spinner = true;
    this.arquivoSelecionado = files.item(0);
    this.produtoServico.enviarArquivo(this.arquivoSelecionado)
      .subscribe(
        nomeArquivo => {
          this.produto.nomeArquivo = nomeArquivo;
          console.log(nomeArquivo);
          this.ativar_spinner = false;
        },
        e => {
          console.log(e.error);
          this.ativar_spinner = false;
        }
      );
  }

  public cadastrar() {
    this.ativar_spinner = true;
    this.produtoServico.cadastrar(this.produto)
      .subscribe(
        produtoJson => {
          this.ativar_spinner = false;
          console.log(produtoJson);
          this.router.navigate(['/pesquisar-produto']);
        },
        e => {
          console.log(e.error);
          this.ativar_spinner = false;
          this.mensagem = e.error;
        }
    )
  }

  
}
