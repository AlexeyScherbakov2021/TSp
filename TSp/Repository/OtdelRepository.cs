using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TSp.Models;

namespace TSp.Repository
{
    public class OtdelRepository : IOtdelRepository
    {
        private PersonalNGKContext context;

        public OtdelRepository(PersonalNGKContext ctx) => context = ctx;

        public IQueryable<Otdel> Otdel => context.Otdel;

    }
}


