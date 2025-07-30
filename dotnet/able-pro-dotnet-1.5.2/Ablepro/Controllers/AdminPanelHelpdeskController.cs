using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class AdminPanelHelpdeskController : Controller
    {
        #region Helpdesk
        public IActionResult HelpdeskDashboard()
        {
            return View();
        }
        public IActionResult HelpdeskTicketCreate()
        {
            return View();
        }
        public IActionResult HelpdeskTicket()
        {
            return View();
        }
        public IActionResult HelpdeskTicketDetails()
        {
            return View();
        }
        public IActionResult HelpdeskCustomer()
        {
            return View();
        }
        #endregion

    }
}
