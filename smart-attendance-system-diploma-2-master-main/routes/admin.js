const express = require('express')
const router = express.Router()
const hodController = require('../controllers/hod')


const isAuth = (req, res, next) => {
    if(req.session.isAuth&& req.session.user_id.role == 'admin'){
        next()
    }else if (req.session.isAuth&& req.session.user_id.role == 'hod') {
        res.redirect('/hod')
    }else if (req.session.isAuth&& req.session.user_id.role == 'faculty') {
        res.redirect('/faculty')
    }else if (req.session.isAuth&& req.session.user_id.role == 'dean') {
        res.redirect('/admin')
    }else{
        res.redirect('/login')
    }
}

router.get('/',isAuth, hodController.getHome)

router.post('/logout', isAuth, hodController.logout)


module.exports = router