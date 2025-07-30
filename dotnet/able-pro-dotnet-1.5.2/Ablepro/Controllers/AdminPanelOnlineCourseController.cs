using Microsoft.AspNetCore.Mvc;

namespace Ablepro.Controllers
{
    public class AdminPanelOnlineCourseController : Controller
    {
        #region Dashboard
        public IActionResult CourseDashboard()
        {
            return View();
        }
        public IActionResult CoursePricing()
        {
            return View();
        }
        public IActionResult CourseSite()
        {
            return View();
        }
        #endregion

        #region Teacher
        public IActionResult CourseTeacherList()
        {
            return View();
        }

        public IActionResult CourseTeacherApply()
        {
            return View();
        }

        public IActionResult CourseTeacherAdd()
        {
            return View();
        }
        #endregion

        #region Student
        public IActionResult CourseStudentList()
        {
            return View();
        }

        public IActionResult CourseStudentApply()
        {
            return View();
        }

        public IActionResult CourseStudentAdd()
        {
            return View();
        }
        #endregion

        #region Course
        public IActionResult CourseCourseView()
        {
            return View();
        }
        public IActionResult CourseCourseAdd()
        {
            return View();
        }
        #endregion

        #region Settings
        public IActionResult CourseSettingPayment()
        {
            return View();
        }
        public IActionResult CourseSettingPricing()
        {
            return View();
        }
        public IActionResult CourseSettingNotifications()
        {
            return View();
        }
        #endregion

    }
}
