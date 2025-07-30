using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class MapsController : Controller
    {
        public IActionResult MapVector()
        {
            return View();
        }
        public IActionResult MapGmap()
        {
            return View();
        }
    }
}
