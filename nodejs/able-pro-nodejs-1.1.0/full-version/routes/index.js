module.exports = function (route) {
  // Basic static route
  route.get("/", function (req, res) {
    res.render("index");
  });
  route.get("/index", function (req, res) {
    res.render("index");
  });

  // dashboard Dynamic route with a parameter
  route.get("/dashboard/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`dashboard/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // dashboard Dynamic route with a parameter
  route.get("/demo/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`demo/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // widget Dynamic route with a parameter
  route.get("/widget/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`widget/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // admins Dynamic route with a parameter
  route.get("/admins/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`admins/${section}`, {
      layout: "layouts/main-layout",
    });
  });


  route.get("/elements/animation", function (req, res) {
    res.render(`elements/animation`);
  });


  route.get("/elements/icon-feather", function (req, res) {
    res.render(`elements/icon-feather`);
  });


  route.get("/elements/icon-fontawesome", function (req, res) {
    res.render(`elements/icon-fontawesome`);
  });


  route.get("/elements/icon-material", function (req, res) {
    res.render(`elements/icon-material`);
  });


  route.get("/elements/icon-tabler", function (req, res) {

    res.render(`elements/icon-tabler`);
  });


  route.get("/elements/icon-phosphor", function (req, res) {
    res.render(`elements/icon-phosphor`);
  });
  

  route.get("/elements/icon-custom", function (req, res) {
    res.render(`elements/icon-custom`);
  });



  // elements Components Dynamic route with a parameter
  route.get("/elements/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`elements/${section}`, {
      layout: "layouts/component-layout",
    });
  });

  // forms Components Dynamic route with a parameter
  route.get("/forms/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`forms/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // table Components Dynamic route with a parameter
  route.get("/table/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`table/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // chart Components Dynamic route with a parameter
  route.get("/chart/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`chart/${section}`, {
      layout: "layouts/main-layout",
    });
  });

  // application Components Dynamic route with a parameter
  route.get("/application/:section", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`application/${section}`, {
      layout: "layouts/main-layout",
    });
  });
  
  route.get("/pages/price-v1", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`pages/price-v1`);
  });
  
  route.get("/pages/price-v2", function (req, res) {
    const section = req.params.section; // Capture the dynamic part of the URL
    res.render(`pages/price-v2`);
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
