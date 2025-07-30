using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class AdminPanelMembershipController : Controller
    {
        #region Membership
        public IActionResult MembershipDashboard()
        {
            return View();
        }
        public IActionResult MembershipList()
        {
            return View();
        }
        public IActionResult MembershipPricing()
        {
            return View();
        }
        public IActionResult MembershipSetting()
        {
            return View();
        }
        #endregion
    }
}
