import nodemailer from "nodemailer";

function getEmailData(to, name) {
  let data = null;
  data = {
    from: "Resolve Logo <murilojssilva@outlook.com>",
    to,
    subject: `Assunto ${name}`,
    html: "<h1>Teste React</h1>",
  };

  return data;
}

function sendEmail(to, name, type) {
  const smtpTransport = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: "",
      pass: "",
    },
  });

  const mail = getEmailData(to, name, type);
  smtpTransport.sendMail(mail, function (error, response) {
    if (error) {
      console.log(error);
    } else {
      console.log(" E-mail enviado com sucesso.");
    }
    smtpTransport.close();
  });
}

export default { sendEmail };
