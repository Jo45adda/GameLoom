const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send('Identifiants invalides');
    }

    const token = jwt.sign({ id: user.id }, 'ton_secret_jwt'); // Remplace par un secret plus sécurisé
    res.json({ token });
});

module.exports = router;
