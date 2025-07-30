using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ApplicationCalendarController : Controller
  {
    #region Calendar
    public IActionResult Calendar()
    {
      return View();
    }
    #endregion
  }
}
