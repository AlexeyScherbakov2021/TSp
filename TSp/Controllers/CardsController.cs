﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using TSp.Models;
using TSp.Repository;

namespace TSp.Controllers
{
    public class TodoItem
    {
        public long Id { get; set; }
        public string? Name { get; set; }
        public bool IsComplete { get; set; }
    }


    [ApiController]
    [Route("[controller]")]
    public class CardsController : ControllerBase
    {
        private IPersonRepository personRepo;
        private IOtdelRepository otdelRepo;

        //private static int CardsPerPage = 5;

        public CardsController(IPersonRepository repo, IOtdelRepository repoOtdel)
        {
            personRepo = repo;
            otdelRepo = repoOtdel;
        }


        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            if (personRepo.DeletePerson(id))
                return Ok();

            return NotFound();
        }

        [HttpPost]
        public IActionResult Post(IFormFile uploadedFile, int id)
        {
            //personRepo.EditUser(person);
            return Ok();
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult CreatePerson(Personal person)
        {
            //personRepo.CreatePerson(person);
            return Ok();
        }


        [HttpGet]
        [Route("Index")]
        public IEnumerable<Card> Index(string search)
        {
            List<Personal> listPersonal;

            if (!string.IsNullOrEmpty(search))
            {
                listPersonal = personRepo.Personal
                    .Where(it => (it.PersonalLastName.Contains(search)
                             || it.PersonalName.Contains(search)
                             || it.PersonalMidName.Contains(search)
                             || it.PersonalTel.Contains(search)
                             || it.PersonalMobil.Contains(search))
                     )
                    .Include(it => it.PersonalProf)
                    .Include(it => it.PersonalOtdel)
                    .OrderBy(it => it.PersonalLastName)
                    .ThenBy(it => it.PersonalName)
                    .ThenBy(it => it.PersonalMidName)
                    .ToList();

            }
            else 
            { 
                listPersonal = personRepo.Personal
                    .Include(it => it.PersonalProf)
                    .Include(it => it.PersonalOtdel)
                    .OrderBy(it => it.PersonalLastName)
                    .ThenBy(it => it.PersonalName)
                    .ThenBy(it => it.PersonalMidName)
                    .ToList();
            }

            return BuildCards(listPersonal);

        }


        [HttpGet]
        public IEnumerable<Card> Get(int otdel, string alpha, string search, int page, int CardsPerPage = 5)
        {
            List<Personal> listPersonal;

            //int PageSize = page * CardsPerPage;


            if (!string.IsNullOrEmpty(search))
            {
                listPersonal = personRepo.Personal
                    .Where(it => it.PersonalDisabled != true 
                             && (it.PersonalLastName.Contains(search)
                             || it.PersonalName.Contains(search)
                             || it.PersonalMidName.Contains(search)
                             || it.PersonalTel.Contains(search)
                             || it.PersonalMobil.Contains(search))
                     )
                    .Include(it => it.PersonalProf)
                    .Include(it => it.PersonalOtdel)
                    .OrderBy(it => it.PersonalLastName)
                    .ThenBy(it => it.PersonalName)
                    .ThenBy(it => it.PersonalMidName)
                    .Skip((page - 1) * CardsPerPage)
                    .Take(CardsPerPage)
                    .ToList();

            }

            else if (otdel < 0)
                // выбран весь список
                if (!string.IsNullOrEmpty(alpha))
                {
                    // выбрана буква
                    listPersonal = personRepo.Personal
                        .Where(it => it.PersonalDisabled != true && it.PersonalLastName.Substring(0, 1) == alpha)
                        .Include(it => it.PersonalProf)
                        .Include(it => it.PersonalOtdel)
                        .OrderBy(it => it.PersonalLastName)
                        .ThenBy(it => it.PersonalName)
                        .ThenBy(it => it.PersonalMidName)
                        .Skip((page - 1) * CardsPerPage)
                        .Take(CardsPerPage)
                        .ToList();
                }
                else
                {
                    listPersonal = personRepo.Personal
                            .Where(it => it.PersonalDisabled != true)
                            .Include(it => it.PersonalProf)
                            .Include(it => it.PersonalOtdel)
                            .OrderBy(it => it.PersonalLastName)
                            .ThenBy(it => it.PersonalName)
                            .ThenBy(it => it.PersonalMidName)
                            .Skip((page - 1) * CardsPerPage)
                            .Take(CardsPerPage)
                            .ToList();
                }
            else
            {
                // выбран отдел
                // получение списка подотделов
                List<int> idOtdels = new List<int>();
                idOtdels.Add(otdel);
                GetSubOtdels(otdel, idOtdels);

                if (!string.IsNullOrEmpty(alpha))
                {
                    // выбрана буква
                    listPersonal = personRepo.Personal
                        .Where(it => it.PersonalDisabled != true
                            && idOtdels.Contains(it.PersonalOtdelId.Value)
                            && it.PersonalLastName.Substring(0, 1) == alpha)
                        .Include(it => it.PersonalProf)
                        .Include(it => it.PersonalOtdel)
                        .OrderBy(it => it.PersonalLastName)
                        .ThenBy(it => it.PersonalName)
                        .ThenBy(it => it.PersonalMidName)
                        .Skip((page - 1) * CardsPerPage)
                        .Take(CardsPerPage)
                        .ToList();
                }
                else
                {
                    listPersonal = personRepo.Personal
                        .Where(it => idOtdels.Contains(it.PersonalOtdelId.Value) && it.PersonalDisabled != true)
                        .Include(it => it.PersonalProf)
                        .Include(it => it.PersonalOtdel)
                        .Include(it => it.PersonalOtdel.OtdelParent)
                        .OrderBy(it => it.PersonalLastName)
                        .ThenBy(it => it.PersonalName)
                        .ThenBy(it => it.PersonalMidName)
                        .Skip((page - 1) * CardsPerPage)
                        .Take(CardsPerPage)
                        .ToList();
                }
            }
            return BuildCards(listPersonal);
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

        //---------------------------------------------------------------------------------------------------        
        //---------------------------------------------------------------------------------------------------        
        private IEnumerable<Card> BuildCards(List<Personal> listPersonal)
        {
            List<Card> cards = new List<Card>();
            foreach(Personal p in listPersonal)
            {
                Card card = new Card
                {
                    PersonalId = p.PersonalId,
                    PersonalName = p.PersonalName,
                    PersonalLastName = p.PersonalLastName,
                    PersonalMidName = p.PersonalMidName,
                    PersonalEmail = p.PersonalEmail,
                    PersonalTel = p.PersonalTel,
                    PersonalMobil = p.PersonalMobil,
                    PersonalPhoto = p.PersonalPhoto,
                    PersonalDisabled = p.PersonalDisabled,
                    PersonalProfId = p.PersonalProfId,
                    PersonalOtdelId = p.PersonalOtdelId
                };

                card.Profession = p.PersonalProf.ProfName;
                card.RouteOtdels = p.PersonalOtdel?.OtdelName;

                Otdel parentOtdel = p.PersonalOtdel?.OtdelParent;
                while (parentOtdel != null)
                {
                    card.RouteOtdels = parentOtdel.OtdelName + " / " +  card.RouteOtdels;
                    parentOtdel = parentOtdel.OtdelParent;
                }
                cards.Add(card );

            }

            return cards.ToArray();
        }

    }
}
