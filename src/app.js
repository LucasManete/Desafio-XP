const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const cors = require('cors');
const { swaggerConfig } = require('./docs/swagger.config');
const router = require('./routes/route');

const app = express();

app.use(express.json());
app.use(cors());
const swaggerDoc = swaggerJSDoc(swaggerConfig);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use('/', router);

module.exports = app;
