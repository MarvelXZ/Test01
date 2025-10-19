const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="sr">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test01 - Docker Aplikacija</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background: linear-gradient(135deg, #ff6b6b 0%, #c92a2a 100%);
          color: white;
        }
        .container {
          text-align: center;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          backdrop-filter: blur(10px);
        }
        h1 { margin: 0 0 1rem 0; }
        p { font-size: 1.2rem; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🐳 Docker Test Aplikacija</h1>
        <p>Uspešno pokrenut na portu ${PORT}</p>
        <p>Vreme: ${new Date().toLocaleString('sr-RS')}</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});
