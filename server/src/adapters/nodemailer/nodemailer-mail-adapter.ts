import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";



const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "82254a738b995e",
    pass: "991d3a0711111a"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Mônica Marçal <monicamarcal93@gmail.com>',
    subject,
    html: body,
  });
  };
}