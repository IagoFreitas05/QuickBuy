using QuickBuy.Dominio.Entidades.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    public class Pedido : Entidade
    {
        public int Id { get; set; }
        public DateTime DataPedido {get;set;}
        public int UsuarioId { get; set; }
        public virtual Usuario Usuario { get; set; }
        public DateTime DataPrevisaoEntrega { get; set; }
        public string CEP { get; set; }
        public string Estado { get; set; }
        public string Cidade { get; set; }
        public string EnderecoCompleto { get; set; }
        public int NumeroEndereco { get; set; }
        public FormaPagamento FormaPagamento { get; set; }
        public int FormaPagamentoId { get; set; }

        /// <summary>
        /// Pode ter 1 pedido ou muitos pedido
        /// </summary>
       
        public ICollection<ItemPedido> ItensPedido { get; set; }

        public override void Validate()
        {
            LimparMensagensValidacao();
            if(!ItensPedido.Any())
            {
                AdicionarMensagensValidacao("Crítica - Item de pedido não pode ficar vazio");
            }

            if(String.IsNullOrEmpty(CEP))
            {
                AdicionarMensagensValidacao("CEP não pode ficar vazio");
            }
        }
    }
}
