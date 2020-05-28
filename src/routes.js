import { Router } from "express";
import nodemailer from "nodemailer";
const routes = new Router();

require("dotenv").config();

routes.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

routes.post("/api/sendMail", (request, response, next) => {
  let emailfrom = request.body.email;
  let emailTo = "murilojssilva@gmail.com";
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "murilojssilva@gmail.com",
      pass: "wkumnhzmcqecqiiw",
    },
  });
  const message = {
    from: emailfrom,
    to: emailTo,
    subject: request.body.subject,
    html: `
    <h3><strong>Nome:</strong> ${request.body.name}</h3>
    <h4><strong>Whatsapp:</strong> ${request.body.phone}</h4>
    <p>${request.body.message}</p>
    `,
  };
  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(`Falha no envio. Erro: ${error}`);
    }
    return response.status(200).send("E-mail enviado com sucesso.");
  });
});

export default routes;
