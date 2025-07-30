using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class WidgetController : Controller
    {
        public IActionResult Chart()
        {
            return View();
        }

        public IActionResult Data()
        {
            return View();
        }

        public IActionResult Statistics()
        {
            return View();
        }
    }
}
