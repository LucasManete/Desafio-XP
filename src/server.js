const app = require('./app');
require('dotenv').config();

const port = process.env.DB_PORT;

app.get('/', (_request, response) => {
  response.send('akljsdalksd');
});

app.listen(port, () => console.log('ouvindo porta', port));
