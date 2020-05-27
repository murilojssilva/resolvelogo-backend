import { Router } from "express";
import nodemailer from "nodemailer";
const routes = new Router();

require("dotenv").config();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.post("/api/sendMail", (request, response, next) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "murilojssilva@gmail.com",
      pass: "wkumnhzmcqecqiiw",
    },
  });

  const message = {
    from: `${request.body.name} <${request.body.email}>`,
    to: "murilossilva@gmail.com",
    subject: request.body.subject,
    html: `
    <h3><strong>Nome:</strong> ${request.body.name}</h3>
    <h4><strong>Whatsapp:</strong> ${request.body.phone}</h4>
    <p>${request.body.message}</p>
    `,
  };
  transporter.sendMail(message, (error, info) => {
    if (error) {
      //return response.status(400).send(`Falha no envio. Erro: ${error}`);
      console.log(`Falha no envio. Erro: ${error}`);
    }
    return response.status(200).send("E-mail enviado com sucesso.");
  });
  //sendEmail(request.body.email, request.body.name, "hello");
});

export default routes;
