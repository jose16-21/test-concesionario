const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3400;
const server = http.createServer(app);
server.listen(port,
    console.log(
        `Server corriendo en modo ${process.env.NODE_ENV} y puerto ${port}`.yellow.bold
    ));