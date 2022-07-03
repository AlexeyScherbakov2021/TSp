﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        //private PersonalNGKContext ctx;
        private IPersonRepository repoPerson;
        private IOtdelRepository otdelRepo;


        public AlphaController(IPersonRepository repoPers, IOtdelRepository repoOtdel)
        {
            repoPerson = repoPers;
            otdelRepo = repoOtdel;
        }

        [HttpGet]
        public IEnumerable<string> Get(int otdel)
        {
            IEnumerable<string> listAlpha;

            if(otdel >= 0)
            {
                List<int> idOtdels = new List<int>();
                idOtdels.Add(otdel);
                GetSubOtdels(otdel, idOtdels);

                listAlpha = repoPerson.Personal
                    .Where(it => it.PersonalDisabled != true && idOtdels.Contains(it.PersonalOtdelId.Value))
                    .Select(it => it.PersonalLastName.Substring(0, 1).ToUpper())
                    .Distinct()
                    .OrderBy(a => a);
            }
            else
            {
                listAlpha = repoPerson.Personal
                    .Where(it => it.PersonalDisabled != true)
                    .Select(it => it.PersonalLastName.Substring(0, 1).ToUpper())
                    .Distinct()
                    .OrderBy(a => a);
            }

            return listAlpha.ToArray();
        }

        //---------------------------------------------------------------------------------------------------        
        //---------------------------------------------------------------------------------------------------        
        private void GetSubOtdels(int idOtdel, List<int> idOtdels)
        {
            Otdel lo = otdelRepo.Otdel.Where(o => o.OtdelId == idOtdel).Include(p => p.SubOtdel).FirstOrDefault();
            foreach (Otdel o in lo.SubOtdel)
            {
                idOtdels.Add(o.OtdelId);
                GetSubOtdels(o.OtdelId, idOtdels);
            }

        }

    }
}
