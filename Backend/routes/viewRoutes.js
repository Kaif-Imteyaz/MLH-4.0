const express = require('express'); 
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');

const router = express.Router() ; 

router.get('/homepage', authController.isLoggedIn, viewsController.homepage);
router.get('/login',authController.isLoggedIn, viewsController.login)
router.get('/aboutus',viewsController.aboutus)
router.get('/scan',authController.protect, authController.isLoggedIn, viewsController.scan)
router.get('/me',authController.protect, authController.isLoggedIn, viewsController.profile)
router.get('/result', authController.isLoggedIn, viewsController.result)

module.exports = router; 
