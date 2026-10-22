const express = require('express')
const router = express.Router()
const branch_couresController = require('../controllers/branchCoures')
const facultyController = require('../controllers/faculty')
const multer  = require('multer')

const dbs = require('../models/dbs')


const isAuth = (req, res, next) => {
    if(req.session.isAuth && req.session.user_id.role == 'faculty'){
        next()
    }else if (req.session.isAuth) {
        res.redirect('/hod')
    }else{
        res.redirect('/login')
    }
}

const user_Access = async (req, res, next) => {
    let flag = true
    let url = req.originalUrl
    let url_array = url.split("/")
    let info = {
        faculty: url_array[2],
        course: url_array[3],
        branch: url_array[4]
    }

    let user_role = req.session.user_id.role

    let data = await dbs.queries([`select branch from user_access where ${user_role}_Email = '${req.session.user_id.email}';`])
    
    // console.log(data[0])
    let branches = data[0]
    console.log(branches)

    for (let i = 0; i < branches.length; i++) {
        const element = branches[i];
        if (element.branch == info.branch && flag == true) {
            flag = false
            next()
        }
    }

    if (flag == true) {
        res.redirect(`/${req.session.user_id.role}/${info.faculty}`)
    }

}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/')
        // cb(null, './tmp/my_uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${file.fieldname}-${Date.now()}.csv` )
    }
})

const upload = multer({storage})

router.get('/',isAuth, branch_couresController.getBranch_coures)
router.get('/table_doesnt_exists',isAuth, branch_couresController.table_doesnt_exists)


// branch IT routes
router.get('/Diploma/IT',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/IT/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/IT/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/IT/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/IT/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/IT/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/IT/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/IT/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/IT/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/IT/showTable', [isAuth, user_Access],facultyController.showTable)



// branch CE routes
router.get('/Diploma/CE',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/CE/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/CE/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/CE/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/CE/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/CE/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/CE/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/CE/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/CE/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/CE/showTable', [isAuth, user_Access],facultyController.showTable)



// branch ME routes
router.get('/Diploma/ME',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/ME/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/ME/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/ME/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/ME/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/ME/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/ME/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/ME/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/ME/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/ME/showTable', [isAuth, user_Access],facultyController.showTable)



// branch EE routes
router.get('/Diploma/EE',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/EE/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/EE/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/EE/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/EE/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/EE/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/EE/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/EE/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/EE/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/EE/showTable', [isAuth, user_Access],facultyController.showTable)



// branch EC routes
router.get('/Diploma/EC',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/EC/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/EC/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/EC/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/EC/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/EC/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/EC/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/EC/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/EC/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/EC/showTable', [isAuth, user_Access],facultyController.showTable)



// branch CHEMICAL routes
router.get('/Diploma/CHEMICAL',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/CHEMICAL/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/CHEMICAL/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/CHEMICAL/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/CHEMICAL/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/CHEMICAL/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/CHEMICAL/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/CHEMICAL/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/CHEMICAL/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/CHEMICAL/showTable', [isAuth, user_Access],facultyController.showTable)




// branch AUTO routes
router.get('/Diploma/AUTO',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/AUTO/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/AUTO/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/AUTO/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/AUTO/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/AUTO/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/AUTO/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/AUTO/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/AUTO/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/AUTO/showTable', [isAuth, user_Access],facultyController.showTable)



// branch CIVIL routes
router.get('/Diploma/CIVIL',[isAuth, user_Access], branch_couresController.getOptions)
router.get('/Diploma/CIVIL/take_attendance',[isAuth, user_Access], facultyController.take_attendance)
router.get('/Diploma/CIVIL/show_taken_attendance',[isAuth, user_Access], facultyController.show_taken_attendance)
router.get('/Diploma/CIVIL/update_taken_attendance',[isAuth, user_Access], facultyController.update_taken_attendance)

router.post('/Diploma/CIVIL/updateAttendance', [isAuth, user_Access], facultyController.updateAttendance)
router.post('/Diploma/CIVIL/getUploadOption',[isAuth, user_Access], facultyController.getUploadOption)
router.post('/Diploma/CIVIL/addAttendance', [isAuth, user_Access], facultyController.addAttendance)
router.post('/Diploma/CIVIL/getTable', [isAuth, user_Access],facultyController.getTable)
router.post('/Diploma/CIVIL/getUpdateTable', [isAuth, user_Access],facultyController.getUpdateTable)
router.post('/Diploma/CIVIL/showTable', [isAuth, user_Access],facultyController.showTable)




module.exports = router