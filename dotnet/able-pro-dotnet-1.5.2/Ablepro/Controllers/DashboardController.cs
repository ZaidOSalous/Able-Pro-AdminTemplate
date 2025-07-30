using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Analytics()
        {
            return View();
        }

        
        public IActionResult Finance()
        {
            return View();
        }
    }
}
