using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class FileUploadController : Controller
  {
    #region File Upload
    public IActionResult Dropzone()
    {
      return View();
    }

    public IActionResult Uppy()
    {
      return View();
    } 
    #endregion
  }
}
