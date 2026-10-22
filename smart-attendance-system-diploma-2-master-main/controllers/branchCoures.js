const dbs = require('../models/dbs')
const { request, response } = require('express')


module.exports = {
    getBranch_coures: (req, res) => {
        res.render('branch_coures.ejs', {user_id: req.session.user_id,})
    },

    getOptions: (req, res) => {
        console.log(req.originalUrl)
        if (req.session.user_id.role == 'admin') {
            res.render('admin_home.ejs', {user_id: req.session.user_id, original_url: req.originalUrl})
        }
        else if (req.session.user_id.role == 'dean') {
            res.render('dean_home.ejs', {user_id: req.session.user_id, original_url: req.originalUrl})
        }
        else if (req.session.user_id.role == 'hod') {
            res.render('hod_home.ejs', {user_id: req.session.user_id, original_url: req.originalUrl})
        }
        else if (req.session.user_id.role == 'faculty') {
            res.render('faculty_home.ejs', {user_id: req.session.user_id, original_url: req.originalUrl})
        }
    },
    
    table_doesnt_exists: (req, res) => {
        res.render('student_master_table_doesnt_exists.ejs', {user_id: req.session.user_id, original_url: req.originalUrl})
    },
}