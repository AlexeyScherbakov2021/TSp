using System.Collections.Generic;

namespace TSp.Models
{
    public class Card
    {
        public int PersonalId { get; set; }
        public string PersonalName { get; set; }
        public string PersonalLastName { get; set; }
        public string PersonalMidName { get; set; }
        public string PersonalEmail { get; set; }
        public string PersonalTel { get; set; }
        public string PersonalMobil { get; set; }
        public string PersonalPhoto { get; set; }
        public bool? PersonalDisabled { get; set; }
        public int? PersonalProfId { get; set; }
        public int? PersonalOtdelId { get; set; }
        public string Profession { get; set; }
        public string RouteOtdels { get; set; }
    }

    public class ListCards
    {
        List<Card> listCard;

        public ListCards(IEnumerable<Personal> listPers)
        {
            listCard = new List<Card>();
            foreach (var p in listPers)
            {
                listCard.Add(
                    new Card
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
                    }
                    ); ;
            }
        }
    }
}
