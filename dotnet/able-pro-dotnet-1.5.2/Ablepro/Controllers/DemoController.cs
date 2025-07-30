using Microsoft.AspNetCore.Mvc;

namespace Mantis.Controllers
{
  public class DemoController : Controller
  {
    #region Layout Demo
    public IActionResult Vertical()
    {
      return View();
    }

    public IActionResult Horizontal()
    {
      return View();
    }

    public IActionResult ColorHeader()
    {
        return View();
    }

    public IActionResult Compact()
    {
      return View();
    }

    public IActionResult Tab()
    {
      return View();
    }
    #endregion
  }
}
