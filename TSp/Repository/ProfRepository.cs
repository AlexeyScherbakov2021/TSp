using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TSp.Models;

namespace TSp.Repository
{
    public class ProfRepository :IProfRepository
    {
        private PersonalNGKContext context;

        public ProfRepository(PersonalNGKContext ctx) => context = ctx;

        public IQueryable<Prof> Prof => context.Prof;
    }
}
