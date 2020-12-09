import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Produto } from "../../modelo/Produto";
import { ProdutoServico } from "../../servicos/produto/produto.servico";

@Component({
  selector: "pesquisa-produto",
  templateUrl: "./pesquisa.component.html",
  styleUrls: ["./pesquisa.component.css"]

})

export class PesquisaProdutoComponent implements OnInit {

  public produtos : Produto[]
  ngOnInit(): void {
    this.produtos = []
  }

  constructor(private produtoServico: ProdutoServico, private router: Router) {
    this.produtoServico.obterTodosOsProdutos()
      .subscribe(
        produtos => {
          this.produtos = produtos
        },
        e => {
          console.log(e.error)
        }
      );
  }

  public adicionarProduto()
  {
    this.router.navigate(['/produto']);
  }

  public deletarProduto(produto: Produto) {
    var retorno = confirm("Deseja realmente deletar o produto selecionado?");
    if (retorno == true) {
      this.produtoServico.deletar(produto)
        .subscribe(
          produtos => {
            this.produtos = produtos;
          },
          e => {
            console.log(e.errors);
          }
        );
    }
  }

  public editarProduto(produto: Produto) {
    sessionStorage.setItem('produtoSession', JSON.stringify(produto));
    this.router.navigate(['/produto']);

  }
}
