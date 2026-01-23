import express from "express";
import { env } from "./config/dotenv.js";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  return res.render('index');
});

app.get("/analytics", (req, res) => {
  res.render("pages/analytics");
});

app.get('/auth-login-minimal', (req, res) => {
  res.render('./pages/auth-login-minimal.ejs');
});

app.get('/auth-register-minimal', (req, res) => {
  res.render('./pages/auth-register-minimal.ejs');
});

app.get('/auth-404-minimal', (req, res) => {
  res.render('./pages/auth-404-minimal.ejs');
});

app.get('/auth-reset-minimal', (req, res) => {
  res.render('./pages/auth-reset-minimal.ejs');
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server Started ");
    console.log(`http://localhost:${PORT}`);
  }
});