import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "720cfa6c0f854b",
      pass: "bc43a14c1d2684"
    }
  });

  export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData): Promise<void> {
        await transport.sendMail({
        from: 'Natanael Feedget <natanaelrodrigues@gmail.com>',
        to: 'Natanael Feedget <natanaelrodrigues@gmail.com>',
        subject,
        html: body,
      });
      }
}
    
   
