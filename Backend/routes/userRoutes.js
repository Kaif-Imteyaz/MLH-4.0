const express = require("express");
const authController = require("../controller/authController");
const zapScanner = require("../zap");

const router = express.Router();

router.post("/signup", authController.signup);

router.post("/login", authController.login);

router.get('/scan?', authController.protect, zapScanner.scriptRunner);

router.route('/forgotPassword').post(authController.forgotPassword);

router.route('/resetPassword/:token').patch(authController.resetPassword);

router.route('/currentUser').get(authController.currentUser);


module.exports = router;
