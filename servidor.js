const http = require ('http');
const chalk = require('chalk');

const host = 'localhost';
const puerto = 8080; 

const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const respuesta = JSON.stringify({ nombre: 'Loli', mensaje: 'Hola desde el servidor' });
  res.end(respuesta);
});

servidor.listen(puerto, host, () => {
  console.log(chalk.green(`Servidor escuchando en http://${host}:${puerto}`));

});
