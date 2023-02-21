require('dotenv-safe').config({ allowEmptyValues: true });
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'development';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const port = process.env.PORT || 5000;

nextApp
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());

    server.all('*', (req, res) => handle(req, res));
    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`Server started on ${port}`);
    });
  })
  .catch((errorStack) => {
    if (process.env.NODE_ENV === 'production') {
      console.log("Server Error. Can't connect to the server! ");
    } else {
      console.log(errorStack);
    }
  });
