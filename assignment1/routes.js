

const requestHandler = (req, res) => {
  const requestRoute = req.url;
  const requestMethod = req.method;

  if (requestRoute === '/') {
    res.write(`
      <html>
        <head><title>Main Page</title></head>
        <body>
          <form action="/create-user" method="POST">
            <input type="text" name="username"/>
            <button type="submit">Salvar</button>
          </form>
        </body>
      </html>
    `);
    return res.end();
  }

  if (requestRoute == '/users') {
    const users = ['Caio', 'Jaise', 'Darwin','Tchala'];
    let response = '';

    users.forEach(user => response += `<li>${user}</li>`);
    
    res.write(`
      <html>
      <head><title>teste</title></head>
      <body>
        <ul>${response}</ul>
      </body>
      </html>
    `);

    return res.end();
  }

  if (requestRoute == '/create-user' && requestMethod == 'POST') {
    const requestBody = [];

    req.on('data', (chunk) => {
      requestBody.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(requestBody).toString();
      const userName = parsedBody.split('=')[1];
      console.log(userName);

      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }
};

module.exports = requestHandler;