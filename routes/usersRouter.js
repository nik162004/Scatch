const express = require('express');
const router = express.Router();
const {registerUser, loginUser, logout} = require("../controllers/authController");

router.get("/", function(req, res){
    res.send("User Router");
});

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logout);

module.exports = router;