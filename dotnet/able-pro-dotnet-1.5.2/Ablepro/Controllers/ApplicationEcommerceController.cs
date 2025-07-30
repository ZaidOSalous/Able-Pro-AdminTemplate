using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ApplicationEcommerceController : Controller
  {
    #region E-Commerce
    public IActionResult Checkout()
    {
      return View();
    }

    public IActionResult Product()
    {
      return View();
    }

    public IActionResult ProductList()
    {
      return View();
    }
    public IActionResult ProductAdd()
    {
      return View();
    }

    public IActionResult ProductDetails()
    {
      return View();
    }
    #endregion
  }
}
