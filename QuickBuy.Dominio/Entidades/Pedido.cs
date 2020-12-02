using QuickBuy.Dominio.Entidades.ObjetoDeValor;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    class Pedido
    {
        public int Id { get; set; }
        public DateTime Data {get;set;}
        public int UsuarioId { get; set; }
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
    }
}
