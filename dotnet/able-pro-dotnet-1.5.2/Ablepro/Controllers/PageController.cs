using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class PageController : Controller
  {

    #region Pages

    #region Authentication1
    public IActionResult AuthCheckMail1()
    {
      return View();
    }

    public IActionResult AuthCodeVerification1()
    {
      return View();
    }

    public IActionResult AuthForgetPassword1()
    {
      return View();
    }

    public IActionResult AuthLogin1()
    {
      return View();
    }

    public IActionResult AuthRegister1()
    {
      return View();
    }

    public IActionResult AuthResetPassword1()
    {
      return View();
    }
    #endregion

    #region Authentication2
    public IActionResult AuthCheckMail2()
    {
      return View();
    }

    public IActionResult AuthCodeVerification2()
    {
      return View();
    }

    public IActionResult AuthForgetPassword2()
    {
      return View();
    }

    public IActionResult AuthLogin2()
    {
      return View();
    }

    public IActionResult AuthRegister2()
    {
      return View();
    }

    public IActionResult AuthResetPassword2()
    {
      return View();
    }
    #endregion

    #region Authentication3
    public IActionResult AuthLogin3()
    {
      return View();
    }
    #endregion

    #region Coming-soon
    public IActionResult Comingsoon1()
    {
      return View();
    }
    public IActionResult Comingsoon2()
    {
      return View();
    }
    #endregion

    #region Price
    public IActionResult Price1()
    {
      return View();
    }
        public IActionResult Price2()
    {
      return View();
    }
    #endregion

    #region Other
    public IActionResult Error404()
    {
      return View();
    }
    public IActionResult Error500()
    {
      return View();
    }

    public IActionResult Landing()
    {
      return View();
    }

    public IActionResult ContactUs()
    {
      return View();
    }

    public IActionResult UnderConstruction1()
    {
      return View();
    }
    public IActionResult UnderConstruction2()
    {
      return View();
    }

    #endregion

    #endregion
  }
}
