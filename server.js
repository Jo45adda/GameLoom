const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./config/passport');

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/gameloop', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
