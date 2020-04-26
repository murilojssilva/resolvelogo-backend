import { Router } from "express";
import nodemailer from "nodemailer";
const routes = new Router();

require("dotenv").config();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.post("/api/sendMail", (req, res) => {
  console.log(req.body);
  let transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "murilojssilva@outlook.com",
      pass: "Mdjss.1992",
    },
  });
  const message = {
    from: "Resolve Logo <murilojssilva@outlook.com",
    to: req.body.email,
    subject: req.body.subject,
    html: `
    <h1>Teste</h1>
    <h3><strong>Nome:</strong> ${req.body.name}</h3>
    <h4><strong>Whatsapp:</strong> ${req.body.phone}</h4>
    <p>${req.body.message}</p>
    `,
  };
  transporter.sendMail(message, (error, info) => {
    if (error) {
      return res.status(400).send(`Falha no envio. Erro: ${error}`);
      console.log(`Falha no envio. Erro: ${error}`);
    }
    return res.status(200).send("E-mail enviado com sucesso.");
    console.log("E-mail enviado com sucesso.");
  });
  //sendEmail(req.body.email, req.body.name, "hello");
});

export default routes;
