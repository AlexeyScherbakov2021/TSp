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
    public class OtdelController
    {
        private IOtdelRepository otdelRepo;

        public OtdelController(IOtdelRepository repo)
        {
            otdelRepo = repo;
        }




        [HttpGet]
        public IEnumerable<Otdel> Get()
        {
            List<Otdel> list = otdelRepo.Otdel.ToList();


            //list = Enumerable.Range(1, 5).Select(index => new myOtdel
            //{
            //    OtdelName = "otdel1",
            //    SubOtdel = null

            //})
            //.ToArray();

            Otdel[] otdels = list.ToArray();

            return otdels;

        }
    }

}
