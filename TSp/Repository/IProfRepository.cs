using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TSp.Models;

namespace TSp.Repository
{
    public interface IProfRepository
    {
        IQueryable<Prof> Prof { get; }
    }
}
