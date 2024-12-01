const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // Você pode usar outro serviço como Outlook
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail(to, subject, text) {
  try {
    await transporter.sendMail({
      from: `"Sistema de Relatórios" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text,
    });
    console.log('E-mail enviado com sucesso!');
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
  }
}

module.exports = sendEmail;
