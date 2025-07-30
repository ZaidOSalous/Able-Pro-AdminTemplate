using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ApplicationCustomerController : Controller
  {
    #region Customer
    public IActionResult CustomerList()
    {
      return View();
    }
    #endregion
  }
}
