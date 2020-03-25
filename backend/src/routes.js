const express = require('express');
const ongController = require('./controllers/ongController');
const incidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express.Router();

routes.post('/sessions', sessionController.create);

routes.get('/ongs', ongController.list);

routes.post('/ongs', ongController.create);

routes.post('/incidents', incidentController.create);

routes.get('/incidents', incidentController.list);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);



module.exports = routes;
