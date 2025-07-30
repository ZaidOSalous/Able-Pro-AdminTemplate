module.exports = function (route) {
  // Basic static route
  route.get("/", function (req, res) {
    res.render("index");
  });

  route.get("/index", function (req, res) {
    res.render("index");
  });

  route.get("/dashboard/index", function (req, res) {
    res.render(`dashboard/index`, {
      layout: "layouts/main-layout",
    });
  });


  // pages Components Dynamic route with a parameter
  route.get("/pages/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`pages/${section}`, {
      layout: "layouts/auth-layout",
    });
  });

  // other Components Dynamic route with a parameter
  route.get("/other/sample-page", function (req, res) {
    res.render("other/sample-page", {
      layout: "layouts/main-layout",
    });
  });
  
}
