using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using TSp.Models;
using TSp.Repository;
using Newtonsoft.Json;


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
        //public string Get()
        {
            List<Otdel> list = otdelRepo.Otdel.ToList();

            List<Otdel> newList = new List<Otdel>();

            foreach(var item in list)
            {
                if (item.OtdelParentId == null)
                {
                    Otdel otdel = new Otdel()
                    {
                        OtdelId = item.OtdelId,
                        OtdelName = item.OtdelName,
                        OtdelParentId = item.OtdelParentId,
                        //SubOtdel = new List<Otdel>()
                    };
                    if(item.SubOtdel.Count != 0)
                    {
                        otdel.SubOtdel = new List<Otdel>();
                        foreach(var it in item.SubOtdel)
                        {
                            Otdel subOtdel = new Otdel()
                            {
                                OtdelId = it.OtdelId,
                                OtdelName = it.OtdelName,
                                OtdelParentId = it.OtdelParentId,
                            };
                            otdel.SubOtdel.Add(subOtdel);

                        }
                    }
                    newList.Add(otdel);
                }
            }


            //string json = JsonConvert.SerializeObject(list, Formatting.Indented);

            //list = Enumerable.Range(1, 5).Select(index => new myOtdel
            //{
            //    OtdelName = "otdel1",
            //    SubOtdel = null

            //})
            //.ToArray();

            //Otdel[] otdels = list.ToArray();



            return newList.ToArray();

        }
    }

}
