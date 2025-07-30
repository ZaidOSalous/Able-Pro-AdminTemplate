using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class ApplicationUserController : Controller
    {

        #region Social Media
        public IActionResult SocialMedia()
        {
            return View();
        }
        #endregion


        #region Account Profile
        public IActionResult AccountProfile()
        {
            return View();
        }
        #endregion
    }
}
