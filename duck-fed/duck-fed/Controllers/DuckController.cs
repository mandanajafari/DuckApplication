using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using duck_fed.Models;

namespace duck_fed.Controllers
{
    public class DuckController : Controller
    {

        private DuckDBEntities _duckContext = null;
        public DuckController()
        {
            _duckContext = new DuckDBEntities();
        }
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult GetAllItems()
        {
            List<Duck> duck = _duckContext.Ducks.ToList();
            return Json(duck, JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetDuckById(int Id)
        {
            return Json(_duckContext.Ducks.Find(Id), JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetTypes()
        {
            List<FoodType> foodType = _duckContext.FoodTypes.ToList();
            return Json(foodType, JsonRequestBehavior.AllowGet);
        }
        public int GetDuckByLocation(string location)
        {
            var count = _duckContext.Ducks.Where(x => x.Location == location).ToList();
            var DuckCount = count.Select(t => t.DuckNum).Sum();
            return DuckCount;
        }
        public int GetDuckByTime(DateTime time)
        {
            var count = _duckContext.Ducks.Where(x => x.Time == time).Count();
            return count;
        }
        public int GetAllDucks()
        {
            var count = _duckContext.Ducks.Select(t => t.DuckNum).Sum();
            return count;
        }

        [HttpPost]
        public JsonResult CreateDuck(Duck duck)
        {
            _duckContext.Ducks.Add(duck);
            _duckContext.SaveChanges();
            return Json(null);
        }

        [HttpPut]
        public JsonResult EditDuck(Duck duck)
        {
            _duckContext.Entry(duck).State = System.Data.Entity.EntityState.Modified;
            _duckContext.SaveChanges();
            return Json(null);

        }
        [HttpPost]
        public JsonResult DeleteDuck(int id)
        {
            var duck = _duckContext.Ducks.Find(id);
            _duckContext.Ducks.Remove(duck);
            _duckContext.SaveChanges();
            return Json(null);
        }
        [HttpPost]
        public JsonResult Save(List<Duck> duckList)
        {
            foreach (var duck in duckList)
            {
                _duckContext.Ducks.Add(duck);
            }
            _duckContext.SaveChanges();
            return Json(null);
        }
    }
}
