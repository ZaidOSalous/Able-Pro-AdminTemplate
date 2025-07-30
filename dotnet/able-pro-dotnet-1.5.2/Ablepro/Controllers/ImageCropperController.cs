using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class ImageCropperController : Controller
  {
    #region Image Cropper
    public IActionResult ImageCropper()
    {
      return View();
    } 
    #endregion
  }
}
