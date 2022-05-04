import express from 'express';
import nodemailer from 'nodemailer'
import { prisma } from './prisma';

const app = express();

// middleware de uso do json no express
app.use(express.json());



//teste mail


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "777f19a0470a70",
    pass: "ee04a67d801e01"
  }
});


//Routes

app.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    }
  })

  transport.sendMail({
    from: "Equipe Feedget <oi@fidget.com>",
    to: 'Cristian Camargo <chris.camargo2015@gmail.com>',
    subject: "Novo Feedback",
    html: [
      `<div style="font-family: sans-serif; font-size:16px; color: #111;">`,
      `Tipo do Feedback : ${type} `,
      `Comentario : ${comment}`,
      `</div>`
    ].join('\n'),
  })

  return res.status(201).json({ data: feedback });
});


//Config da porta que o servidor vai ouvir

app.listen(3333, () => {
  console.log('Http Server Runing...');
});