// const { Router } = require('express');
// const router = Router();

const router = require('express').Router();
const usersControllers = require('../controllers/usersControllers');

router.get('/api/users', usersControllers.index);
router.get('/api/users/create', usersControllers.create);

module.exports = router;