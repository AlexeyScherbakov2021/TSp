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
    public class CardsController : ControllerBase
    {
        private IPersonRepository personRepo;

        public CardsController(IPersonRepository repo)
        {
            personRepo = repo;
        }


        [HttpGet]
        public IEnumerable<Personal> Get(int otdel, string alpha, string search, int page)
        {
            List<Personal> listPersonal;

            if (otdel < 0)
                listPersonal =  personRepo.Personal.ToList();

            else
            {
                listPersonal = personRepo.Personal.Where(it => it.PersonalOtdelId == otdel).ToList();
            }


            string[] ar = new string[listPersonal.Count];
            int i = 0;

            List<Personal> newList = new List<Personal>();

            foreach (var person in listPersonal)
            {
                ar[i++] = person.PersonalLastName;

                newList.Add(new Personal
                {
                    PersonalLastName = person.PersonalLastName,
                    PersonalEmail = person.PersonalEmail
                });
            }

            return listPersonal.ToArray();
        }




    }
}
