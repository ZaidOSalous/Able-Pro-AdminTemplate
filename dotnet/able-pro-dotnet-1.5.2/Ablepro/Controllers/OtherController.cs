using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class OtherController : Controller
  {
    #region Other
    public IActionResult SamplePage()
    {
      return View();
    } 
    #endregion
  }
}
