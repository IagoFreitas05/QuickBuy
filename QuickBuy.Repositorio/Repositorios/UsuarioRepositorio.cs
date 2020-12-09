using System;
using System.Collections.Generic;
using System.Text;
using QuickBuy.Dominio.Entidades;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Repositorio.Contexto;
using System.Linq;

namespace QuickBuy.Repositorio.Repositorios
{
    public class UsuarioRepositorio : BaseRepositorio<Usuario>, IUsuarioRepositorio
    {
        public UsuarioRepositorio(QuickBuyContexto quickBuyContexto) : base(quickBuyContexto)
        {
        }

        public Usuario Obter(string email, string senha)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault( u => u.Email == email && u.Senha == senha);
        }

        public Usuario Obter(string email)
        {
            return QuickBuyContexto.Usuarios.FirstOrDefault(u => u.Email == email);
        }
    }
}
