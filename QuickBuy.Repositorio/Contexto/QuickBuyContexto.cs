using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Entidades.ObjetoDeValor;
using QuickBuy.Repositorio.Config;

namespace QuickBuy.Repositorio.Contexto
{
    public class QuickBuyContexto : DbContext
    {
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }
        public DbSet <ItemPedido> ItemsPedidos { get; set; }
        public DbSet <FormaPagamento> FormaPagamento { get; set; }

        public QuickBuyContexto(DbContextOptions options) : base(options)
        {

        }

        protected override void  OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new UsuarioConfiguration());
            modelBuilder.ApplyConfiguration(new PedidoConfiguration());
            modelBuilder.ApplyConfiguration(new ItemPedidoConfiguration());
            modelBuilder.ApplyConfiguration(new FormaPagamentoConfiguration());
            modelBuilder.ApplyConfiguration(new ProdutoConfiguration());

            modelBuilder.Entity<FormaPagamento>().HasData(
                new FormaPagamento()
                {
                    Id = 1,
                    Nome= "Boleto", 
                    Descricao = "Forma de Pagamento Boleto"
                },

                new FormaPagamento()
                {
                    Id = 2,
                    Nome = "Cartão de crédito",
                    Descricao = "Forma de pagamento cartão de Crédito"
                },

                new FormaPagamento()
                {
                    Id = 3,
                    Nome = "Depósito",
                    Descricao = "Forma de pagamento depósito"
                }
            );

            base.OnModelCreating(modelBuilder);
        }
    }
}
 