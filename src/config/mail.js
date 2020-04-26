import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  segure: false,
  auth: {
    user: "d0dfcb027b3099",
    pass: "da54ad3f8ce0ae",
  },
  tls: { rejectUnauthorized: false },
  default: {
    from: "Resolve Logo <noreply@resolvelogo.com>",
  },
});

let mailOptions = {
  from: "murilojssilva@gmail.com",
  to: "murilojssilva@outlook.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: "<h1>Resolve Logo</h1><p>Texto!</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
