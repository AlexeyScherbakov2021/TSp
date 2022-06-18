using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TSp.Models;

namespace TSp.Repository
{
    public interface IPersonRepository
    {
        IQueryable<Personal> Personal { get; }
        void CreatePerson(Personal user);
        void DeletePerson(int id);
        void EditUser(Personal user);
        void SavePhoto(Personal user);
    }
}
