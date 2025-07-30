using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class FormLayoutController : Controller
  {
    #region Form Layout
    public IActionResult Actionbar()
    {
      return View();
    }

    public IActionResult Layout()
    {
      return View();
    }

    public IActionResult Multicolumn()
    {
      return View();
    }

    public IActionResult StickyActionbar()
    {
      return View();
    } 
    #endregion
  }
}
