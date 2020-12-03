using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entidades
{
    class ItemPedido : Entidade
    {   
        public int id { get; set; }
        public int ProdutoId { get; set; }
        public int Quantidade { get; set; }

        public override void Validate()
        {
            if (ProdutoId == 0)
                AdicionarMensagensValidacao("Não foi indetificado qual a referência do prouduto");

            if (Quantidade == 0)
                AdicionarMensagensValidacao("Quantidade não foi informada");
        }
    }
}
