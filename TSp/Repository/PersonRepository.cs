﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TSp.Models;

namespace TSp.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private PersonalNGKContext context;

        public PersonRepository(PersonalNGKContext ctx) => context = ctx;

        public IQueryable<Personal> Personal => context.Personal;

        public void CreatePerson(Personal user)
        {
            context.Personal.Add(user);
            context.SaveChanges();
        }

        public bool DeletePerson(int id)
        {
            Personal user = context.Personal.Where(u => u.PersonalId == id).FirstOrDefault();
            if (user != null)
            {
                context.Personal.Remove(user);
                context.SaveChanges();
                return true;
            }

            return false;
        }

        public void EditUser(Personal user)
        {
            Personal pers = context.Personal.Where(u => u.PersonalId == user.PersonalId).FirstOrDefault();

            if (pers != null)
            {
                pers.PersonalDisabled = user.PersonalDisabled;
                pers.PersonalEmail = user.PersonalEmail;
                pers.PersonalLastName = user.PersonalLastName;
                pers.PersonalMidName = user.PersonalMidName;
                pers.PersonalMobil = user.PersonalMobil;
                pers.PersonalName = user.PersonalName;
                pers.PersonalTel = user.PersonalTel;
                pers.PersonalOtdelId = user.PersonalOtdelId;
                pers.PersonalOtdel = user.PersonalOtdel;
                pers.PersonalProfId = user.PersonalProfId;
                pers.PersonalProf = user.PersonalProf;
              
                context.SaveChanges();
            }
        }

        public void SavePhoto(Personal user)
        {
            Personal pers = context.Personal.Where(u => u.PersonalId == user.PersonalId).FirstOrDefault();

            if (pers != null)
            {
                pers.PersonalPhoto = user.PersonalPhoto;
                context.SaveChanges();
            }
        }

    }
}
