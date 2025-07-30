using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ApplicationMailController : Controller
  {
    #region Mail
    public IActionResult Mail()
    {
      return View();
    } 
    #endregion
  }
}
