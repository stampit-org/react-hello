import express from 'express';
import path from 'path';

let app = express();

const staticPath = path.resolve('build/');

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="content"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js"></script>
        <script src="/app-client.js"></script>
      </body>
    </html>
  `);
});

app.use(express.static(staticPath));

export default app;
