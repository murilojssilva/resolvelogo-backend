import nodemailer from "nodemailer";
import mailConfig from "../config/mail";

class Mail {
  constructor() {
    const { host, port, secure } = mailConfig;
    this.transporter = nodemailer.createTestAccount([host, port, secure]);
  }
  sendMail(message) {
    return this.transporter.sendMail([...mailConfig.default, ...message]);
  }
}

export default new Mail();
