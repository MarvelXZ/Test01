// Cloudflare Worker za Test01 aplikaciju

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Serviranje HTML stranice
    if (url.pathname === '/') {
      const html = `
        <!DOCTYPE html>
        <html lang="sr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Test01 - Cloudflare Worker</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
            }
            .container {
              text-align: center;
              padding: 2rem;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 10px;
              backdrop-filter: blur(10px);
              box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            }
            h1 { margin: 0 0 1rem 0; }
            p { font-size: 1.2rem; margin: 0.5rem 0; }
            .badge {
              display: inline-block;
              background: rgba(255, 255, 255, 0.2);
              padding: 0.5rem 1rem;
              border-radius: 20px;
              margin-top: 1rem;
              font-size: 0.9rem;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>⚡ Cloudflare Workers Aplikacija</h1>
            <p>Test01 Project</p>
            <p>Pokrenut na Cloudflare Edge Network</p>
            <p>Vreme: ${new Date().toLocaleString('sr-RS')}</p>
            <div class="badge">Powered by Cloudflare Workers</div>
          </div>
        </body>
        </html>
      `;

      return new Response(html, {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      });
    }

    // API endpoint za testiranje
    if (url.pathname === '/api/status') {
      const data = {
        status: 'online',
        timestamp: new Date().toISOString(),
        worker: 'test01-worker',
        region: request.cf?.colo || 'unknown'
      };

      return new Response(JSON.stringify(data, null, 2), {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    }

    // 404 za sve ostale rute
    return new Response('Not Found', { status: 404 });
  },
};
