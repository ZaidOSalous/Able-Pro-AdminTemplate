const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const http = require("http").Server(app);

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set("view engine", "ejs");

// Set the directory for static assets
app.use(express.static(path.join(__dirname, "dist")));
app.use("/node_modules", express.static(path.join(__dirname, "node_modules")));
// Set the layouts
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/main-layout");
app.use(expressLayouts);

// Import routes
const pageRouter = require("./routes");
pageRouter(app);

// Handle 404 errors
 app.all("*", (req, res) => {
  res.locals = { title: "404 Page Not Found" };
  res.status(404).render("pages/error-404", { layout: "layouts/auth-layout", });
});

// Start the server
http.listen(process.env.PORT, () => {
  console.log(`Server running on port, http://localhost:8000`);
});
