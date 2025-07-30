using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class ApplicationFileManagerController : Controller
    {
        public IActionResult ApplicationFileManager()
        {
            return View();
        }
    }
}
