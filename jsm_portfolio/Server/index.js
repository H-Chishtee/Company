const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "https://www.projjexx.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true, // enable set cookie
  })
);

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "osman@projjexx.co", //user: "osman@projjexx.co",
    pass: "gmpm wfij rfju eqsw", //pass: "gmpm wfij rfju eqsw"
  },
});

app.post("/send-email", (req, res) => {
  const { name, email, country, phone, message } = req.body;

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "m.hasanzubair01@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nCountry: ${country}\nPhone: ${phone}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Email not sent");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
