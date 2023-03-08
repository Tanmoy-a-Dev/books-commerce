const nodemailer = require('nodemailer');
// const transport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'fivertanmoy@gmail.com',
//     pass: 'TRISHan123',
//   },
// });

const transport = nodemailer.createTransport({
  host: 'smtp-relay.sendinblue.com',
  port: 587,
  secure: false,
  auth: {
    user: 'tuto6634@gmail.com',
    pass: 'WL6JwABrEtHZGUpz',
  },
});

module.exports = transport;
