using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ApplicationChatController : Controller
  {
    #region Chat
    public IActionResult Chat()
    {
      return View();
    } 
    #endregion
  }
}
