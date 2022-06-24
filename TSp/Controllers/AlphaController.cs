using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using TSp.Models;
using TSp.Repository;

namespace TSp.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class AlphaController : ControllerBase
    {

        private PersonalNGKContext ctx;
        private IPersonRepository repo;

        public AlphaController(IPersonRepository context)
        {
            repo = context;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {

            var s = repo.Personal
                .Where(it => it.PersonalDisabled != true)
                .Select(it => it.PersonalLastName.Substring(0, 1).ToUpper())
                .Distinct()
                .OrderBy(a => a);

            return s.ToArray();
        }
    }
}
