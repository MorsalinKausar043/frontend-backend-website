const express = require("express");
const path = require("path");
const hbs = require('hbs');
const { expr } = require("jquery");
require('./db/db')
const app = express();
const port = process.env.PORT || 8000;

// file middleware path
const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

// middleware
app.use("/css", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js")));
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery/dist")));
app.use(express.static(staticpath));
app.set("view engine", "hbs");
app.set("views", templatespath)
hbs.registerPartials(partialspath);

app.get("/", (req, res) => {
    res.status(201).render("index")
});

app.get("/about", (req, res) => {
    res.status(201).render("about")
});

app.get("/gallery", (req, res) => {
    res.status(201).render("gallery")
});

app.listen(port , ()=> console.log(`express server is ${port}`))