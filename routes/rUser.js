const express = require('express');
const router = express.Router();


const cUser = require('../controllers/cUser');

router.post('/', cUser.create);
router.get('/checkPassword/:email/:password', cUser.checkUserPassword)
router.get('/:email', cUser.getUserByEmail)
module.exports = router
