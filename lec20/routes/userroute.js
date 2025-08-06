const express = require('express');
const { registerUser, loginUser, readuser } = require('../controller/usercontroller');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login",loginUser);
router.get("/getuser", readuser);

module.exports = router;
