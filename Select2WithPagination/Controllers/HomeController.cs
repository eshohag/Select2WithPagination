using Newtonsoft.Json;
using Select2WithPagination.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Select2WithPagination.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            var list = new List<DropdownList>();

            for (int i = 0; i < 200; i++)
            {
                list.Add(new DropdownList() { id = i, text = "Test Data-" + i });
            }
            var defaultList = list.FindAll(x => x.id > 5 && x.id < 11).ToArray();

            ViewBag.Data = JsonConvert.SerializeObject(list);
            ViewBag.DefaultList = JsonConvert.SerializeObject(defaultList);
            return View(list);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        //public JsonResult Data()
        //{
        //    var list = new List<DropdownList>();

        //    for (int i = 0; i < 9000; i++)
        //    {
        //        list.Add(new DropdownList() { id = i, text = "Test Data-" + i });
        //    }

        //    return Json(JsonConvert.SerializeObject(list), JsonRequestBehavior.AllowGet);
        //}
    }
}
