using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
  public class TextEditorController : Controller
  {
    #region Text editors
    public IActionResult CKEditorBalloon()
    {
      return View();
    }

    public IActionResult CKEditorClassic()
    {
      return View();
    }

    public IActionResult CKEditorDocument()
    {
      return View();
    }

    public IActionResult CKEditorInline()
    {
      return View();
    }

    public IActionResult Markdown()
    {
      return View();
    }

    public IActionResult Quill()
    {
      return View();
    }

    public IActionResult Tinymce()
    {
      return View();
    } 
    #endregion
  }
}
