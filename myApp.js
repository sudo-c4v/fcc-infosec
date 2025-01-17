const express = require('express', 'helmet');
const app = express();
app.use(helmet.hidePoweredBy());

const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

module.exports = app;

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
