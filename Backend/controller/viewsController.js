const catchAsync = require("../utils/catchAsync");

exports.homepage = catchAsync(async (req, res, next) => {
    res.status(200).render('homepage',{
        title : 'Home Page'
    })
})

exports.login = catchAsync( async (req,res,next)=>{
    res.status(200).render('login', {
        title : 'login Page'
    })
})

exports.aboutus = catchAsync(async (req,res,next) =>{
    res.status(200).render('about', {
        title : 'AboutUs Page'
    })
})

exports.scan = catchAsync(async (req,res,next) =>{
    res.status(200).render('scan', {
        title : 'Scan Page'
    })
})

exports.result = catchAsync(async (req,res,next) =>{
    res.status(200).render('result', {
        title : 'Result Page'
    })
})

exports.profile = catchAsync(async (req,res,next) =>{
    res.status(200).render('profile', {
        title : 'Result Page'
    })
})
