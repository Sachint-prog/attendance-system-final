const { request, response } = require('express')
const dbs = require('../models/dbs')

// master table format `stu${id}`
// Monthly table format `y${year}_m${month}_${student_master_table}`


let attendance = 'attendance'
// let users = 'users'
let subjects = 'subjects'
let master_table = `master_table`
let master_table_2 = `master_table_3`
let subject_master_table = `dummy_1`
let user_access = "user_access"

let table_type = []

let info_upload = {

}

function update_lectures_function(date, lectures, value) {
    try {
        let lecture_arr = []
        let lecture_str = ''
        lectures.forEach(lecture => {
            let query = `d${date}_l${lecture} = ${value}`
            lecture_arr.push(query)
        });

        lecture_str += lecture_arr.join(", ")
        console.log(lecture_arr)
        console.log(lecture_str)
        return lecture_str
    } catch (error) {
        // console.log(error)
    }
}


module.exports = {
    getHome: (request, response) => {
        response.render('faculties.ejs', {user_id: request.session.user_id,})
    },

    // getBranch_coures: (req, res) => {
    //     res.render('branch_coures.ejs', {user_id: req.session.user_id,})
    // },

    // getIT: (req, res) => {
    //     res.render('hod_home.ejs')
    // },

    // attendance_exists: (request, response) => {
    //     response.render('attendance_exists.ejs', {user_id: request.session.user_id,})
    // },

    // getScanner: async (request, response) => {
    //     let data = await dbs.queries([`select * from ${subjects};`])
    //     console.log(data)
    //     response.render('scanner.ejs', { subjects: data[0] ,user_id: request.session.user_id,})
    // },

    // show_attendance: async (request, response) => {
    //     if (request.body == {}) {
    //         // console.log(request.body)
    //     }
    //     let data = await dbs.queries([`SELECT distinct date_format(date, "%Y-%m-%d") as date from ${attendance};`, `select * from ${subjects}`
    //     // `select distinct subject from ${attendance};`,
    //     , `select distinct * from users;`])
    //     let distinct_date = data[0]
    //     let distinct_subject = data[1]
    //     console.log(distinct_date, distinct_subject, request.session.user_id)
    //     response.render('show_attendance.ejs', 
    //     {   distinct_date: distinct_date, 
    //         distinct_subject: distinct_subject, 
    //         result_attendance: "no",
    //         user_id: request.session.user_id,
    //     })
    // },

    // showAttendance: async (request, response) => {
    //     if (request.body.subject != "" && request.body.date != "") {
    //         let data = await dbs.queries([
    //             `SELECT distinct date_format(date, "%Y-%m-%d") as date from ${attendance};`,
    //             // `select distinct subject from ${attendance};`,
    //             `select * from ${subjects}`
    //             `select date_format(date, "%Y-%m-%d") as date, time, subject, present from ${attendance} where date = '${request.body.date}' AND subject = '${request.body.subject}';`
    //         ])
            

    //         let distinct_date = data[0]
    //         let distinct_subject = data[1]
    //         let result_attendance = data[2]
    //         // console.log(result_attendance, request.body.subject, request.body.date)
    //         response.render('show_attendance.ejs', { distinct_date: distinct_date, distinct_subject: distinct_subject, result_attendance: result_attendance ,user_id: request.session.user_id,})


    //     } else if (request.body.subject != "") {
    //         let data = await dbs.queries([
    //             `SELECT distinct date_format(date, "%Y-%m-%d") as date from ${attendance};`,
    //             `select * from ${subjects}`,
    //             // `select distinct subject from ${attendance};`,
    //             `select date_format(date, "%Y-%m-%d") as date, time, subject, present from ${attendance} where subject = '${request.body.subject}';`
    //         ])
    //         console.log(data)

    //         let distinct_date = data[0]
    //         let distinct_subject = data[1]
    //         let result_attendance = data[2]
    //         // console.log(result_attendance)
    //         response.render('show_attendance.ejs', { distinct_date: distinct_date, distinct_subject: distinct_subject, result_attendance: result_attendance ,user_id: request.session.user_id})


    //     } else if (request.body.date != "") {
    //         let data = await dbs.queries([
    //             `SELECT distinct date_format(date, "%Y-%m-%d") as date from ${attendance};`,
    //             `select * from ${subjects}`,
    //             // `select distinct subject from ${attendance};`,
    //             `select date_format(date, "%Y-%m-%d") as date, time, subject, present from ${attendance} where date = '${request.body.date}';`
    //         ])

    //         let distinct_date = data[0]
    //         let distinct_subject = data[1]
    //         let result_attendance = data[2]
    //         // console.log(result_attendance)
    //         response.render('show_attendance.ejs', { distinct_date: distinct_date, distinct_subject: distinct_subject, result_attendance: result_attendance ,user_id: request.session.user_id})


    //     } else {
    //         let data = await dbs.queries([
    //             `SELECT distinct date_format(date, "%Y-%m-%d") as date from ${attendance};`,
    //             `select * from ${subjects}`
    //             // `select distinct subject from ${attendance};`,
    //         ])

    //         let distinct_date = data[0]
    //         let distinct_subject = data[1]
    //         response.render('show_attendance.ejs', { distinct_date: distinct_date, distinct_subject: distinct_subject, result_attendance: "no" ,user_id: request.session.user_id})
    //     }
    // },

    // delete_attendance: async (request, response) => {
    //     let data = await dbs.queries([`select distinct * from users;`])
    //     // console.log(data)
    //     response.render('delete_attendance.ejs', { message: "data", user: data[0], user_id: request.session.user_id })
    // },

    // deleteAttendance: async (request, response) => {
    //     let data = await dbs.queries([`delete from ${attendance} where ${request.body.field} = '${request.body.field_value}';`])
    //     console.log(request.body)

    //     response.redirect("/faculty/show_attendance")
    // },

    // update_attendance: async(request, response) => {
    //     let data = await dbs.queries([`select * from ${subjects};`])
    //     // console.log(data)
    //     response.render('update_attendance.ejs', { user_id: request.session.user_id, subjects: data[0] })
    // },
    
    // updateAttendance: async(request, response) => {
    //     let date_time = new Date();
    //     let date = ("0" + date_time.getDate()).slice(-2);
    //     let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    //     let year = date_time.getFullYear();
    //     let hours = date_time.getHours();
    //     let minutes = date_time.getMinutes();
    //     let seconds = date_time.getSeconds();

    //     let current_date_update = year + "-" + month + "-" + date
    //     let current_time_update = hours + ":" + minutes
    //     let input_date = request.body.date
    //     let input_time = request.body.time
    //     if (current_date_update == input_date && current_time_update == input_time) {
    //         response.redirect(`/${request.session.user_id.role}/scanner`)
    //     }
    //     else if(current_date_update < input_date){
    //         response.redirect(`/${request.session.user_id.role}/update_attendance`)
    //     }
    //     else if (current_date_update == input_date && current_time_update < input_time) {
    //         response.redirect(`/${request.session.user_id.role}/update_attendance`)
    //     }
    //     else{
    //         let data = await dbs.queries([`insert into ${attendance}(date, time, subject, present) values('${input_date}', '${input_time}', "${request.body.subject}", ${request.body.enno});`])

    //         response.redirect(`/${request.session.user_id.role}/show_attendance`)
    //         console.log(request.body)
    //     }
    //     // console.log(year + "-" + month + "-" + date);
    //     // console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds);

    //     console.log(request.body.date)
    //     console.log(request.body.time)
        
    // },

    // addEnrollmentNo: async (request, response) => {
    //     let show_attendance_1 = await dbs.queries([`SELECT date_format(date, "%Y-%m-%d") as date, subject, present from ${attendance};`])
    //     let attendance_1 = show_attendance_1[0]

    //     console.log(attendance_1)

    //     let date_time = new Date();
    //     let date = ("0" + date_time.getDate()).slice(-2);
    //     let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    //     let year = date_time.getFullYear();

    //     let current_date_update = year + "-" + month + "-" + date
        
    //     let attendance_exists = false
    //     attendance_1.forEach(element => {
    //         if (current_date_update == element.date && request.body.subject_name_value == element.subject && request.body.enrollment_no == element.present) {
    //             attendance_exists = true
    //         }
    //         // console.log(element)
    //     });

        

    //     if (attendance_exists == false) {
    //         let data = await dbs.queries([`insert into ${attendance}(date, time, subject, present) values(current_date(), current_time(), "${request.body.subject_name_value}", ${request.body.enrollment_no});`])
    //     }

    //     response.redirect(`/${request.session.user_id.role}/scanner`)
    //     // console.log(request.body)
    // },

    // manually_add_user: async (request, response) => {
    //     // let eno = request.body.enno
        
    //     let data = await dbs.queries([`insert into ${attendance}(date, time, subject, present) values(current_date(), current_time(), "${request.body.subject}", ${request.body.enno});`])

    //     response.redirect(`/${request.session.user_id.role}/scanner`)
    //     console.log(request.body)
    // },

    logout: (request, response) => {
        request.session.destroy((err) => {
            if (err) throw err;
            response.redirect('/')
        })
    },

    take_attendance: async(request,response)=>{
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let user_role = request.session.user_id.role
        console.log(user_role)

        let data = await dbs.queries([`select distinct sem from ${user_access} where course  = '${url_array[3]}' and branch = '${url_array[4]}' and ${user_role}_Email = '${request.session.user_id.email}';`])

        console.log(data[0])
        console.log(info)

        let sem = data[0]

        response.render('take_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: "no", sem: sem, info: info})
    },

    show_taken_attendance: async(request,response)=>{
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let user_role = request.session.user_id.role
        console.log(user_role)

        let data = await dbs.queries([`select distinct sem from ${user_access} where course  = '${url_array[3]}' and branch = '${url_array[4]}' and ${user_role}_Email = '${request.session.user_id.email}';`])
        
        console.log(data[0])
        console.log(info)
        let sem = data[0]

        response.render('show_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: "no", sem: sem, info: info})
    },

    getTable: async(request,response)=>{

        // to dos
        // extract necessary data from request
        // go to master table to get the name of student detail table
        // display the table

        console.log(request.originalUrl)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4],
        }

        let form_info = {
            sem : request.body.sem,
            subject: request.body.subject,
            lectures: request.body.lecture
        }
        // console.log(url_array[3], url_array[4])
        console.log(form_info)
        console.log(info)


        let data_sem = await dbs.queries([`select distinct sem from ${master_table} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        // console.log(data_sem[0])
        let sem = data_sem[0]

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${request.body.sem}';`])
        console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date_time = new Date();
            let date = ("0" + date_time.getDate()).slice(-2);
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            let monthly_table_exists = await dbs.check(monthly_table)
            // console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: 0,
                    last_sr_no: pages_data[0][0].sr_no 
                }



                // console.log(data)
                response.render('take_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0], info:info, sem:sem, form_info: form_info, pages_data: pages_no})
            }
            else{
                let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${student_master_table};`])

                let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: 0,
                    last_sr_no: pages_data[0][0].sr_no 
                }

                // console.log(data)
                response.render('take_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0], info:info, sem:sem, form_info: form_info, pages_data: pages_no})
            }
        }
        else{
            response.redirect(`/${request.session.user_id.role}/${info.faculty}/table_doesnt_exists`)
        }
    },

    showTable: async(request,response)=>{
        console.log(request.body)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            sem: request.body.sem,
            subject: request.body.subject,
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let data_sem = await dbs.queries([`select distinct sem from ${master_table} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        // console.log(data[0])
        console.log(info)
        let sem = data_sem[0]
        
        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
        // console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            // previous year's attendance
            if (request.body.date_time !== "") {
                let date_time = request.body.date_time;
                let date_time_array = date_time.split("-")
                let date = date_time_array[2];
                let month = date_time_array[1];
                let year = date_time_array[0];

                let monthly_table = `y${year}_m${month}_${student_master_table}`
                let monthly_table_exists = await dbs.check(monthly_table)

                if (monthly_table_exists == "table_exists") {
                    let subject_find = await dbs.queries([`select * from ${monthly_table} where sr_no = '0'`])
                    // console.log(subject_find[0][0])
    
                    let subjects_list = subject_find[0][0]
                    let subject_list_keys = Object.keys(subjects_list)
                    console.log(subject_list_keys)
    
                    
    
                    if(info.subject != ""){
                        let valid_subjects_list = ""
                        let keys_obj = {}
    
                        subject_list_keys.forEach(key => {
                            keys_obj[key] = "hidden"
                        });
    
                        console.log(keys_obj)
    
                        subject_list_keys.forEach(key => {
                            if (subjects_list[key] == info.subject) {
                                valid_subjects_list += `, ${key}`
                                keys_obj[key] = "show"
                            }
                        });
    
                        let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name ${valid_subjects_list} from ${monthly_table}`])
                        console.log(data[0])
    
                        response.render('show_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: data[0], sem: sem, info: info, show_necessary: keys_obj})
                    }
                    else{
                        let keys_obj = {}
    
                        subject_list_keys.forEach(key => {
                            keys_obj[key] = "show"
                        });
    
                        let data = await dbs.queries([`select * from ${monthly_table}`])
                        console.log(data[0])
        
                        response.render('show_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: data[0], sem: sem, info: info, show_necessary: keys_obj})
                    }
                }
            }
            else{
                // if the date is not given, we will use today's date as default
                let date_time = new Date();
                let date = ("0" + date_time.getDate()).slice(-2);
                let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
                let year = date_time.getFullYear();

                let monthly_table = `y${year}_m${month}_${student_master_table}`
                let monthly_table_exists = await dbs.check(monthly_table)

                if (monthly_table_exists == "table_exists") {
                    let subject_find = await dbs.queries([`select * from ${monthly_table} where sr_no = '0'`])
                    // console.log(subject_find[0][0])

                    let subjects_list = subject_find[0][0]
                    let subject_list_keys = Object.keys(subjects_list)
                    console.log(subject_list_keys)

                    if(info.subject != ""){
                        let valid_subjects_list = ""
                        let keys_obj = {}

                        subject_list_keys.forEach(key => {
                            keys_obj[key] = "hidden"
                        });

                        console.log(keys_obj)

                        subject_list_keys.forEach(key => {
                            if (subjects_list[key] == info.subject) {
                                valid_subjects_list += `, ${key}`
                                keys_obj[key] = "show"
                            }
                        });

                        let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name ${valid_subjects_list} from ${monthly_table}`])
                        console.log(data[0])

                        response.render('show_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: data[0], sem: sem, info: info, show_necessary: keys_obj})
                    }
                    else{
                        let keys_obj = {}

                        subject_list_keys.forEach(key => {
                            keys_obj[key] = "show"
                        });

                        let data = await dbs.queries([`select * from ${monthly_table}`])
                        console.log(data[0])
        
                        response.render('show_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", attendance: data[0], sem: sem, info: info, show_necessary: keys_obj})
                    }
                }
            }
        }
        else{
            response.redirect(`/${request.session.user_id.role}/${info.faculty}/table_doesnt_exists`)
        }    
    },

    // courses: async(request,response)=>{
    //     // let fakeData = {'name': 'name'}
        
    //     console.log(request.body)
    //     let data = await dbs.queries([`select distinct branch from ${master_table} where course  = '${request.body.value}';`,`select distinct sem from ${master_table} where course  = '${request.body.value}';`])
    //     // console.log(data)
    //     let branch_data = data[0]
    //     let sem_data = data[1]
    //     let send_data = {
    //         'branch': branch_data,
    //         'sem': sem_data
    //     }
    //     // console.log(send_data)
    //     response.json(send_data)
    //     // response.render('dymmy.ejs', {send_data: send_data, error: "send_data"})
    // },

    sem: async(request,response)=>{
        // let fakeData = {'name': 'name'}
        console.log(request.originalUrl)
        // let url = request.originalUrl
        // let url_array = url.split("/")
        // console.log(url_array[3], url_array[4])
        // console.log(request.body)

        let user_role = request.session.user_id.role
        console.log(user_role)


        let data = await dbs.queries([`select distinct Subject_Initial as subject from ${user_access} where sem  = '${request.body.sem}' and branch = '${request.body.branch}' and course = '${request.body.course}' and  ${user_role}_Email = '${request.session.user_id.email}';`])

        console.log(data)

        let subject_data = data[0]
        let send_data = {
            'subject': subject_data,
        }
        // console.log(send_data)
        response.json(send_data)
        // response.render('dymmy.ejs', {send_data: send_data, error: "send_data"})
    },

    addAttendance: async (req, res) => {
        console.log(req.body)
        let info = req.body

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
        // console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date_time = new Date();
            let date = date_time.getDate();
            // console.log(`date: ${date_time.getDate()}`)
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            let monthly_table_exists = await dbs.check(monthly_table)
            // console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                // let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])


                let lectures = info.lectures
                let total_absent = 0
                let total_present = 0


                let attendance = info.attendance

                let total_present_get = 0
                let total_absent_get = 0

                console.log(total_present_get, total_absent_get)

                let test_present = 0
                let test_absent = 0
                let absent_arr = []
                let present_arr = []

                attendance.forEach(async element => {

                    if (element.attendance == "absent") {
                        test_absent = test_absent + 1
                        absent_arr.push(element.enrollment_no)
                    }
                    else if (element.attendance == "present") {
                        test_present = test_present + 1
                        present_arr.push(element.enrollment_no)
                    }

                    let print_test = {
                        present: test_present,
                        absent: test_absent
                    }

                    console.log(print_test)

                });


                






                let total_atd = {
                    present: test_present,
                    absent: test_absent,
                    total: test_present + test_absent
                }

                console.log(total_atd)
                console.log(present_arr)
                console.log(absent_arr)

                if (total_atd.present > total_atd.absent) {
                    // set all to present
                    let lecture_query = update_lectures_function(date, lectures, `'present'`)
                    let data_present = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query};`, `COMMIT;`])

                    // build a string for absent
                    let absent_arr_query = []
                    absent_arr.forEach(element => {
                        absent_arr_query.push(`Enrollment_no = '${element}'`)
                    });

                    let absent_str = ``
                    absent_str += absent_arr_query.join(" or ")

                    // updating absent students
                    lecture_query = update_lectures_function(date, lectures, `'absent'`)
                    console.log(`update ${monthly_table} set ${lecture_query} where ${absent_str};`)

                    let data_absent = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query} where ${absent_str};`, `COMMIT;`])

                    console.log(absent_str)

                    // updating subject name
                    lecture_query = update_lectures_function(date, lectures, `'${info.subject}'`)
                    let data_subject = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Enrollment_no = 'subject'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.present}'`)
                    let total_present_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'PRESENT'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.absent}'`)
                    console.log(lecture_query)
                    let total_absent_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'ABSENT'`])

                    // updating attendance percentage
                    let attendance_percentage = (total_atd.present / total_atd.total) * 100
                    lecture_query = update_lectures_function(date, lectures, `'${attendance_percentage}'`)
                    let attendance_percentage_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = '% ATTENDANCE'`])
                    console.log(attendance_percentage)


                    
                }
                else {
                    // set all to absent
                    let lecture_query = update_lectures_function(date, lectures, `'absent'`)
                    let data_absent = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query};`, `COMMIT;`])

                    // build a string for present
                    let present_arr_query = []
                    present_arr.forEach(element => {
                        present_arr_query.push(`Enrollment_no = '${element}'`)
                    });

                    let present_str = ``
                    present_str += present_arr_query.join(" or ")

                    // updating present students
                    lecture_query = update_lectures_function(date, lectures, `'present'`)
                    let data_present = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query} where ${present_str};`, `COMMIT;`])

                    // console.log(`START TRANSACTION;`, `update ${monthly_table} set d${date}_l${lecture} = 'present' where ${present_str};`)
                    // console.log(present_str)

                    // updating subject name
                    lecture_query = update_lectures_function(date, lectures, `'${info.subject}'`)
                    let data_subject = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Enrollment_no = 'subject'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.present}'`)
                    let total_present_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'PRESENT'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.absent}'`)
                    let total_absent_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'ABSENT'`])

                    // updating attendance percentage
                    let attendance_percentage = (total_atd.present / total_atd.total) * 100
                    lecture_query = update_lectures_function(date, lectures, `'${attendance_percentage}'`)
                    let attendance_percentage_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = '% ATTENDANCE'`])
                    console.log(attendance_percentage)
                }


                attendance.forEach(async element => {
                    // add total for each student
                        let total = await dbs.queries([`SELECT * FROM ${monthly_table} where Enrollment_no = '${element.enrollment_no}';`])

                        let one_row = total[0][0]

                        let keys = Object.keys(one_row)
        
                        // console.log(keys)

                        let total_present = 0
                        let total_absent = 0

                        keys.forEach(key => {
                            if (key !== 'sr_no' && key !== 'Enrollment_no' && key !== 'Student_name' && key !== 'total') {
                                if (one_row[key] == 'present') {
                                    total_present += 1
                                }
                                else if (one_row[key] == 'absent') {
                                    total_absent += 1
                                }
                            }
                        });

                        // console.log({
                        //     present: total_present,
                        //     absent: total_absent
                        // })

                        let total_percentage = (total_present/186) * 100
                        // console.log(total_percentage)

                        let set_total = await dbs.queries([`update ${monthly_table} set total = '${total_percentage}' where Enrollment_no = '${element.enrollment_no}'`])
                });



                // average the whole months total

                    let total_attendance_percentage = await dbs.queries([`SELECT * FROM ${monthly_table} where Student_name = '% ATTENDANCE';`])

                    console.log(total_attendance_percentage[0][0])

                    let keys = Object.keys(total_attendance_percentage[0][0])

                    // console.log(keys)

                    let sum_monthly_attendance = 0
                    keys.forEach(key => {
                        if (key !== 'sr_no' && key !== 'Enrollment_no' && key !== 'Student_name' && key !== 'total') {
                            let value = parseFloat(total_attendance_percentage[0][0][key])
                            sum_monthly_attendance += value
                        }
                    });

                    console.log(sum_monthly_attendance)

                    let average_monthly_attendance = sum_monthly_attendance/186

                    console.log(average_monthly_attendance)

                    let set_total = await dbs.queries([`update ${monthly_table} set total = ${average_monthly_attendance} where Student_name = '% ATTENDANCE';`])

                    let sample = await dbs.queries([`select * from ${monthly_table};`])





                console.log("attendance added")
                console.log(`/${req.session.user_id.role}/${info.faculty}/${info.course}/${info.branch}`)
                let send_data_redirect = {
                    link: `/${req.session.user_id.role}/${info.faculty}/${info.course}/${info.branch}`
                }

                console.log(info.lectures)

                res.json(send_data_redirect)

                // console.log("redirect done")

            }
        }
        else {
            res.redirect(`/${req.session.user_id.role}/${info.faculty}/table_doesnt_exists`)
        }
    },

    upload_page: async(req, res) => {
        let url = req.originalUrl
        console.log(url)
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let data = await dbs.queries([`select distinct sem from ${master_table_2} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        console.log(data[0])
        console.log(info)
        let sem = data[0]

        res.render('convert.ejs', {user_id: req.session.user_id, info:info, upload_option: "dont_show", sem: sem})
    },

    getUploadOption: async(req, res) => {
        let url = req.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        console.log(info)

        let data = await dbs.queries([`select distinct sem from ${master_table_2} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        console.log(data[0])
        console.log(info)
        let sem = data[0]

        console.log(req.body)
        info_upload = Object.assign({}, req.body, info)  
        console.log(info_upload)

        table_type = []
        table_type.push(req.body.table_type)

        res.render('convert.ejs', {user_id: req.session.user_id, info:info, upload_option: "show", sem: sem, info_upload: info_upload})
    },

    uploads_file: async(req, res) => {
        console.log(req.file)
        let url = req.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        console.log(info_upload);

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info_upload.course}' and branch = '${info_upload.branch}' and sem  = '${info_upload.sem}';`])
        console.log(data)

        let id_obj = data[0][0]
        let id = id_obj.id
        console.log(id)

        if (info_upload.table_type == "Master") {


            // for windows


            let data = await dbs.dummy([`LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/${req.file.filename}' 
            INTO TABLE stu${id}
            FIELDS TERMINATED BY ','
            IGNORE 1 ROWS;`], [`CREATE TABLE stu${id} AS SELECT * FROM schema_master;`],`stu${id}`)


            // for linux


            // let data = await dbs.dummy([`SET GLOBAL local_infile = 1;`,
            // `LOAD DATA LOCAL INFILE '/home/debian/Documents/smart-attendance-system-diploma-main/tmp/my_uploads/${req.file.filename}' 
            // INTO TABLE stu${id}
            // FIELDS TERMINATED BY ',' 
            // IGNORE 1 ROWS;`], [`CREATE TABLE stu${id} AS SELECT * FROM schema_master;`],`stu${id}`)



            console.log(data)

            res.render("table_created_successfully.ejs")
            
            // let date_time = new Date();
            // let date = ("0" + date_time.getDate()).slice(-2);
            // let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            // let year = date_time.getFullYear();
            // console.log(`y${year}_m${month}_${student_master_table}`)

            // if (monthly_table_exists == "table_exists") {
            //     let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])
            //     response.render('take_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0]})
            // }
            // else{
            //     let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${student_master_table};`])

            //     let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])
            //     response.render('take_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0]})
            // }
        }
        else if (info_upload.table_type == "Monthly") {
            let master_table = `stu${id}`
            let master_table_exists = await dbs.check(master_table)
            console.log(master_table_exists)

            

            let date_time = new Date();
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();
            let monthly_table = `y${year}_m${month}_${master_table}`
            console.log(`y${year}_m${month}_${master_table}`)

            if (master_table_exists == "table_exists") {
                let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${master_table};`])


                // for windows

                // let data = await dbs.queries([`LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/${req.file.filename}' 
                // INTO TABLE ${monthly_table}
                // FIELDS TERMINATED BY ',' 
                // IGNORE 1 ROWS;`])


                // for linux
                
                let data = await dbs.dummy([`SET GLOBAL local_infile = 1;`,`LOAD DATA LOCAL INFILE '/home/debian/Documents/smart-attendance-system-diploma-main/tmp/my_uploads/${req.file.filename}' 
                INTO TABLE stu${id}
                FIELDS TERMINATED BY ',' 
                IGNORE 1 ROWS;`], [`CREATE TABLE stu${id} AS SELECT * FROM schema_master;`],`stu${id}`)
                console.log(data)
                res.render("table_created_successfully.ejs")
            }else{
                // let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${master_table};`])

                // let data = await dbs.queries([`LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/${req.file.filename}' 
                // INTO TABLE ${monthly_table}
                // FIELDS TERMINATED BY ',' 
                // IGNORE 1 ROWS;`])
                // console.log(data)
                res.render("student_master_table_doesnt_exists.ejs")
            }
            
        }




        // let data = await dbs.dummy([`LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/${req.file.filename}' 
        // INTO TABLE test_3
        // FIELDS TERMINATED BY ',' 
        // IGNORE 1 ROWS;`], [`CREATE TABLE test_3 AS SELECT * FROM test_2;`],"test_3")

        // LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/${req.file.filename}' 
        // INTO TABLE test_1 
        // FIELDS TERMINATED BY ',' 
        // ENCLOSED BY '"'
        // LINES TERMINATED BY '\n'
        // IGNORE 1 ROWS;

        
    },

    update_taken_attendance: async(request,response)=>{
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let user_role = request.session.user_id.role
        console.log(user_role)

        let data = await dbs.queries([`select distinct sem from ${user_access} where course  = '${url_array[3]}' and branch = '${url_array[4]}' and ${user_role}_Email = '${request.session.user_id.email}';`])

        console.log(data[0])
        console.log(info)
        let sem = data[0]

        response.render('update_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: "no", sem: sem, info: info})
    },

    getUpdateTable: async(request,response)=>{

        console.log(request.body)
        let date_time = request.body.datetime
        let date_time_array = date_time.split("-")
        let year = date_time_array[0]
        let month = date_time_array[1]
        let day = date_time_array[2]

        let past_days = {
            array_1: date_time_array,
            year: year,
            month: month,
            day: day
        }
        // console.log(temp_obj)


        // to dos
        // extract necessary data from request
        // go to master table to get the name of student detail table
        // display the table

        console.log(request.originalUrl)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let form_info = {
            sem : request.body.sem,
            subject: request.body.subject,
            lectures: request.body.lecture,
            date_time: date_time
        }
        // console.log(url_array[3], url_array[4])
        console.log(form_info)
        console.log(info)


        let data_sem = await dbs.queries([`select distinct sem from ${master_table} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        // console.log(data_sem[0])
        let sem = data_sem[0]

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${request.body.sem}';`])
        // console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date_time = new Date();
            let day = past_days.day;
            let month = past_days.month;
            let year = past_days.year;
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            let monthly_table_exists = await dbs.check(monthly_table)
            // console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: 0,
                    last_sr_no: pages_data[0][0].sr_no 
                }

                console.log(pages_no)
                response.render('update_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0], info:info, sem:sem, form_info: form_info, pages_data: pages_no})
            }
            else{
                let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${student_master_table};`])

                let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: request.body.page,
                    last_sr_no: pages_data[0][0].sr_no 
                }

                console.log(pages_no)


                // console.log(data)
                response.render('update_taken_attendance.ejs', {user_id: request.session.user_id, send_data: "null", error: "noError", attendance: data[0], info:info, sem:sem, form_info: form_info, pages_data: pages_no})
            }
        }
        else{
            response.redirect(`/${request.session.user_id.role}/${info.faculty}/table_doesnt_exists`)
        }
    },

    updateAttendance: async(request, response) => {
        console.log(request.body)
        let date_time = request.body.datetime
        let date_time_array = date_time.split("-")
        let year = date_time_array[0]
        let month = date_time_array[1]
        let day = date_time_array[2]

        let past_days = {
            array_1: date_time_array,
            year: year,
            month: month,
            day: day
        }

        console.log(request.body)
        let info = request.body
        
        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
        // console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date = past_days.day
            let month = past_days.month;
            let year = past_days.year;
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            console.log(monthly_table)
            let monthly_table_exists = await dbs.check(monthly_table)
            console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                // let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])


                let lectures = info.lectures
                let total_absent = 0
                let total_present = 0


                let attendance = info.attendance

                let total_present_get = 0
                let total_absent_get = 0

                console.log(total_present_get, total_absent_get)

                let test_present = 0
                let test_absent = 0
                let absent_arr = []
                let present_arr = []
                attendance.forEach(element => {

                    if (element.attendance == "absent") {
                        test_absent = test_absent + 1
                        absent_arr.push(element.enrollment_no)
                    }
                    else if (element.attendance == "present") {
                        test_present = test_present + 1
                        present_arr.push(element.enrollment_no)
                    }

                    let print_test = {
                        present: test_present,
                        absent: test_absent
                    }

                    console.log(print_test)

                });

                let total_atd = {
                    present: test_present,
                    absent: test_absent,
                    total: test_present + test_absent
                }

                console.log(total_atd)
                console.log(present_arr)
                console.log(absent_arr)

                if (total_atd.present > total_atd.absent) {
                    // set all to present
                    let lecture_query = update_lectures_function(date, lectures, `'present'`)
                    let data_present = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query};`, `COMMIT;`])

                    // build a string for absent
                    let absent_arr_query = []
                    absent_arr.forEach(element => {
                        absent_arr_query.push(`Enrollment_no = '${element}'`)
                    });

                    let absent_str = ``
                    absent_str += absent_arr_query.join(" or ")

                    // updating absent students
                    lecture_query = update_lectures_function(date, lectures, `'absent'`)
                    console.log(`update ${monthly_table} set ${lecture_query} where ${absent_str};`)

                    let data_absent = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query} where ${absent_str};`, `COMMIT;`])

                    console.log(absent_str)

                    // updating subject name
                    lecture_query = update_lectures_function(date, lectures, `'${info.subject}'`)
                    let data_subject = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Enrollment_no = 'subject'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.present}'`)
                    let total_present_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'PRESENT'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.absent}'`)
                    console.log(lecture_query)
                    let total_absent_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'ABSENT'`])

                    // updating attendance percentage
                    let attendance_percentage = (total_atd.present / total_atd.total) * 100
                    lecture_query = update_lectures_function(date, lectures, `'${attendance_percentage}'`)
                    let attendance_percentage_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = '% ATTENDANCE'`])
                    console.log(attendance_percentage)
                }
                else {
                    // set all to absent
                    let lecture_query = update_lectures_function(date, lectures, `'absent'`)
                    let data_absent = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query};`, `COMMIT;`])

                    // build a string for present
                    let present_arr_query = []
                    present_arr.forEach(element => {
                        present_arr_query.push(`Enrollment_no = '${element}'`)
                    });

                    let present_str = ``
                    present_str += present_arr_query.join(" or ")

                    // updating present students
                    lecture_query = update_lectures_function(date, lectures, `'present'`)
                    let data_present = await dbs.queries([`START TRANSACTION;`, `update ${monthly_table} set ${lecture_query} where ${present_str};`, `COMMIT;`])

                    // console.log(`START TRANSACTION;`, `update ${monthly_table} set d${date}_l${lecture} = 'present' where ${present_str};`)
                    // console.log(present_str)

                    // updating subject name
                    lecture_query = update_lectures_function(date, lectures, `'${info.subject}'`)
                    let data_subject = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Enrollment_no = 'subject'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.present}'`)
                    let total_present_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'PRESENT'`])

                    // updating total no of preent students
                    lecture_query = update_lectures_function(date, lectures, `'${total_atd.absent}'`)
                    let total_absent_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = 'ABSENT'`])

                    // updating attendance percentage
                    let attendance_percentage = (total_atd.present / total_atd.total) * 100
                    lecture_query = update_lectures_function(date, lectures, `'${attendance_percentage}'`)
                    let attendance_percentage_put = await dbs.queries([`update ${monthly_table} set ${lecture_query} where Student_name = '% ATTENDANCE'`])
                    console.log(attendance_percentage)
                }

                attendance.forEach(async element => {
                    // add total for each student
                        let total = await dbs.queries([`SELECT * FROM ${monthly_table} where Enrollment_no = '${element.enrollment_no}';`])

                        let one_row = total[0][0]

                        let keys = Object.keys(one_row)
        
                        // console.log(keys)

                        let total_present = 0
                        let total_absent = 0

                        keys.forEach(key => {
                            if (key !== 'sr_no' && key !== 'Enrollment_no' && key !== 'Student_name' && key !== 'total') {
                                if (one_row[key] == 'present') {
                                    total_present += 1
                                }
                                else if (one_row[key] == 'absent') {
                                    total_absent += 1
                                }
                            }
                        });

                        // console.log({
                        //     present: total_present,
                        //     absent: total_absent
                        // })

                        let total_percentage = (total_present/186) * 100
                        // console.log(total_percentage)

                        let set_total = await dbs.queries([`update ${monthly_table} set total = '${total_percentage}' where Enrollment_no = '${element.enrollment_no}'`])
                });



                // average the whole months total

                    let total_attendance_percentage = await dbs.queries([`SELECT * FROM ${monthly_table} where Student_name = '% ATTENDANCE';`])

                    console.log(total_attendance_percentage[0][0])

                    let keys = Object.keys(total_attendance_percentage[0][0])

                    // console.log(keys)

                    let sum_monthly_attendance = 0
                    keys.forEach(key => {
                        if (key !== 'sr_no' && key !== 'Enrollment_no' && key !== 'Student_name' && key !== 'total') {
                            let value = parseFloat(total_attendance_percentage[0][0][key])
                            sum_monthly_attendance += value
                        }
                    });

                    console.log(sum_monthly_attendance)

                    let average_monthly_attendance = sum_monthly_attendance/186

                    console.log(average_monthly_attendance)

                    let set_total = await dbs.queries([`update ${monthly_table} set total = ${average_monthly_attendance} where Student_name = '% ATTENDANCE';`])


                console.log("attendance added")
                console.log(`/${request.session.user_id.role}/${info.faculty}/${info.course}/${info.branch}`)
                let send_data_redirect = {
                    link: `/${request.session.user_id.role}/${info.faculty}/${info.course}/${info.branch}`
                }

                console.log(info.lectures)

                response.json(send_data_redirect)

                // console.log("redirect done")

            }
        }
        else{
            response.redirect(`/${request.session.user_id.role}/${info.faculty}/table_doesnt_exists`)
        }
    },

    pages_take: async(request, response) => {
        console.log("pages called");

        console.log(request.originalUrl)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4],
        }

        let form_info = {
            sem : request.body.sem,
            subject: request.body.subject,
            lectures: request.body.lectures
        }
        // console.log(url_array[3], url_array[4])
        console.log(form_info)
        console.log(info)


        let data_sem = await dbs.queries([`select distinct sem from ${master_table} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        // console.log(data_sem[0])
        let sem = data_sem[0]

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${request.body.sem}';`])
        console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date_time = new Date();
            let date = ("0" + date_time.getDate()).slice(-2);
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            let monthly_table_exists = await dbs.check(monthly_table)
            // console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: request.body.page,
                    last_sr_no: pages_data[0][0].sr_no 
                }

                console.log(request.body)
                
                let send_data = {
                    user_id: request.session.user_id, 
                    send_data: "null", 
                    error: "noError", 
                    attendance: data[0], 
                    info:info, 
                    sem:sem, 
                    form_info: form_info, 
                    pages_data: pages_no
                }

                response.json(send_data)
            }
            else{
                let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${student_master_table};`])

                let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: request.body.page
                }

                // console.log(data)
                let send_data = {
                    user_id: request.session.user_id, 
                    send_data: "null", 
                    error: "noError", 
                    attendance: data[0], 
                    info:info, 
                    sem:sem, 
                    form_info: form_info, 
                    pages_data: pages_no
                }

                response.json(send_data)
            }
        }
        else{
            let send_data = { 
                error: "yes", 
                
            }
            response.json(send_data)
        }
    },

    pages_update: async(request, response) => {
        console.log("pages called");

        console.log(request.originalUrl)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4],
        }

        let form_info = {
            sem : request.body.sem,
            subject: request.body.subject,
            lectures: request.body.lectures
        }

        console.log(request.body)
        let date_time = request.body.datetime
        let date_time_array = date_time.split("-")
        let year = date_time_array[0]
        let month = date_time_array[1]
        let day = date_time_array[2]

        let past_days = {
            array_1: date_time_array,
            year: year,
            month: month,
            day: day
        }
        // console.log(url_array[3], url_array[4])
        console.log(form_info)
        console.log(info)


        let data_sem = await dbs.queries([`select distinct sem from ${master_table} where course  = '${url_array[3]}' and branch = '${url_array[4]}';`])
        // console.log(data_sem[0])
        let sem = data_sem[0]

        let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${request.body.sem}';`])
        console.log(data)

        let student_master_table = `stu${data[0][0].id}`
        let master_table_exists = await dbs.check(student_master_table)
        // console.log(master_table_exists)

        if (master_table_exists == "table_exists") {
            let date = past_days.day
            let month = past_days.month;
            let year = past_days.year;
            // console.log(`y${year}_m${month}_${student_master_table}`)


            let monthly_table = `y${year}_m${month}_${student_master_table}`
            let monthly_table_exists = await dbs.check(monthly_table)
            // console.log(monthly_table_exists)

            if (monthly_table_exists == "table_exists") {
                let data = await dbs.queries([`select distinct sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: request.body.page,
                    last_sr_no: pages_data[0][0].sr_no 
                }

                console.log(request.body)
                let send_data = {
                    user_id: request.session.user_id, 
                    send_data: "null", 
                    error: "noError", 
                    attendance: data[0], 
                    info:info, 
                    sem:sem, 
                    form_info: form_info, 
                    pages_data: pages_no
                }

                console.log(send_data)
                response.json(send_data)
            }
            else{
                let create_monthly_table = await dbs.queries([`CREATE TABLE ${monthly_table} AS SELECT * FROM ${student_master_table};`])

                let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name from ${monthly_table} where sr_no > 0`])

                let pages_data = await dbs.queries([`select sr_no from ${monthly_table} ORDER BY sr_no DESC LIMIT 1;`])

                let pages_no = {
                    total_page: Math.ceil(pages_data[0][0].sr_no / 30),
                    current_page: request.body.page
                }
                // console.log(data)
                let send_data = {
                    user_id: request.session.user_id, 
                    send_data: "null", 
                    error: "noError", 
                    attendance: data[0], 
                    info:info, 
                    sem:sem, 
                    form_info: form_info, 
                    pages_data: pages_no
                }

                console.log(send_data)
                response.json(send_data)
            }
        }
        else{
            let send_data = { 
                error: "yes", 
                
            }
            response.json(send_data)
        }
    },

    get_student_chart: async(request, response) => {

        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        let user_role = request.session.user_id.role
        console.log(user_role)

        let data = await dbs.queries([`select distinct sem from ${user_access} where course  = '${url_array[3]}' and branch = '${url_array[4]}' and ${user_role}_Email = '${request.session.user_id.email}';`])

        console.log(data[0])
        console.log(info)
        let sem = data[0]

        response.render("student_chart.ejs", {user_id: request.session.user_id, chart: "no", sem: sem, info: info})
    },

    get_student_status_chart: async(request, response) => {
        console.log(request.body)

        if (request.body.search == '') {
            if (request.body.timeperiod == 'daily') {
                if (request.body.date == '') {
                    let date_time = new Date();
                    let date = date_time.getDate();
                    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
                    let year = date_time.getFullYear();

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where sr_no > '0'`])

                            console.log(data[0])
                            let students = data[0]

                            students.forEach(student => {
                                let lectures = [`d${date}_l1`, `d${date}_l2`, `d${date}_l3`, `d${date}_l4`, `d${date}_l5`, `d${date}_l6`]
                                
                                lectures.forEach(lecture => {
                                    if (student[lecture] == "present") {
                                        student[lecture] = 1
                                    }
                                    else{
                                        student[lecture] = 0
                                    }
                                });
                            });

                            console.log(students)

                            // send data with the render

                            

                            let student_name = []
                            let student_en_no = []
                            let lecture_1 = []
                            let lecture_2 = []
                            let lecture_3 = []
                            let lecture_4 = []
                            let lecture_5 = []
                            let lecture_6 = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                lecture_1.push(student[`d${date}_l1`])
                                lecture_2.push(student[`d${date}_l2`])
                                lecture_3.push(student[`d${date}_l3`])
                                lecture_4.push(student[`d${date}_l4`])
                                lecture_5.push(student[`d${date}_l5`])
                                lecture_6.push(student[`d${date}_l6`])
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                lecture_1: lecture_1,
                                lecture_2: lecture_2,
                                lecture_3: lecture_3,
                                lecture_4: lecture_4,
                                lecture_5: lecture_5,
                                lecture_6: lecture_6,
                            }
                           
                            response.json(student_datails)
                        }
                        
                    }
                }

                else if (request.body.date !== '') {
                    let date_time = request.body.date
                    let date_time_array = date_time.split("-")
                    let year = date_time_array[0]
                    let month = date_time_array[1]
                    let date = date_time_array[2]

                    console.log({
                        date: date,
                        year: year,
                        month: month
                    })

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where sr_no > '0'`])

                            console.log(data[0])
                            let students = data[0]

                            students.forEach(student => {
                                let lectures = [`d${date}_l1`, `d${date}_l2`, `d${date}_l3`, `d${date}_l4`, `d${date}_l5`, `d${date}_l6`]
                                
                                lectures.forEach(lecture => {
                                    if (student[lecture] == "present") {
                                        student[lecture] = 1
                                    }
                                    else{
                                        student[lecture] = 0
                                    }
                                });
                            });

                            console.log(students)

                            // send data with the render

                            

                            let student_name = []
                            let student_en_no = []
                            let lecture_1 = []
                            let lecture_2 = []
                            let lecture_3 = []
                            let lecture_4 = []
                            let lecture_5 = []
                            let lecture_6 = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                lecture_1.push(student[`d${date}_l1`])
                                lecture_2.push(student[`d${date}_l2`])
                                lecture_3.push(student[`d${date}_l3`])
                                lecture_4.push(student[`d${date}_l4`])
                                lecture_5.push(student[`d${date}_l5`])
                                lecture_6.push(student[`d${date}_l6`])
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                lecture_1: lecture_1,
                                lecture_2: lecture_2,
                                lecture_3: lecture_3,
                                lecture_4: lecture_4,
                                lecture_5: lecture_5,
                                lecture_6: lecture_6,
                            }
                           
                            response.json(student_datails)
                        }
                        
                    }
                }
            }
            else if (request.body.timeperiod == 'monthly') {
                if (request.body.date == '') {
                    let date_time = new Date();
                    let date = date_time.getDate();
                    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
                    let year = date_time.getFullYear();

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${monthly_table} where sr_no > '0'`])

                            console.log(data[0])
                            let students = data[0]

                            // console.log(students)

                            students.forEach(student => {
                                if (student.total == 0) {
                                    // let random = Math.random() * 100
                                    // console.log(random)
                                    // student.total = random
                                }
                            });

                            // send data with the render

                            let student_name = []
                            let student_en_no = []
                            let monthly_attendance_total = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                monthly_attendance_total.push(student.total)
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                total: monthly_attendance_total
                            }
                           
                            response.json(student_datails)
                        }
                        
                    }
                }

                else if (request.body.date !== '') {
                    let date_time = request.body.date
                    let date_time_array = date_time.split("-")
                    let year = date_time_array[0]
                    let month = date_time_array[1]
                    let date = date_time_array[2]

                    console.log({
                        date: date,
                        year: year,
                        month: month
                    })

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${monthly_table} where sr_no > '0'`])

                            console.log(data[0])
                            let students = data[0]

                            // console.log(students)

                            // send data with the render
                            students.forEach(student => {
                                if (student.total == 0) {
                                    // let random = Math.random() * 100
                                    // console.log(random)
                                    // student.total = random
                                }
                            });
                            

                            let student_name = []
                            let student_en_no = []
                            let monthly_attendance_total = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                monthly_attendance_total.push(student.total)
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                total: monthly_attendance_total
                            }
                           
                            response.json(student_datails)
                        }
                        
                    }
                }
            }
            else if (request.body.timeperiod == 'total') {
                let url = request.originalUrl
                let url_array = url.split("/")
                let info = {
                    faculty: url_array[2],
                    course: url_array[3],
                    branch: url_array[4],
                    sem: request.body.sem
                }

                console.log(info)

                let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                console.log(data)

                let student_master_table = `stu${data[0][0].id}`
                let master_table_exists = await dbs.check(student_master_table)
                // console.log(master_table_exists)

                if (master_table_exists == "table_exists") {

                    let total_no_tables = await dbs.queries([`show tables like '%${student_master_table}'`])

                    let tables_array = []
                
                    total_no_tables[0].forEach(table => {
                        if (table[`Tables_in_student (%${student_master_table})`] == student_master_table) {
                            
                        }
                        else{
                            tables_array.push(table[`Tables_in_student (%${student_master_table})`])
                        }
                    });

                    console.log(tables_array)

                    // let table_detail = []

                    // tables_array.forEach(async table => {
                    //     let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${table} where sr_no > '0'`])

                    //     // console.log(data)
                    //     table_detail.push(data[0])
                    // });
                    
                    // console.log(table_detail)


                    let table_detail = [];

                    Promise.all(tables_array.map(async table => {
                        let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${table} where sr_no > '0'`]);
                        table_detail.push(data[0]);
                    })).then(() => {

                        let no_of_tables = tables_array.length
                        let no_of_students = table_detail[0].length
                        let en_no_dup = []
                        let name_dup = []
                        let total = []
                        let tuple_send_data = {

                        }

                        for (let student = 0; student < no_of_students; student++) {
                            for (let table = 0; table < no_of_tables; table++) {
                                let Enrollment_no = table_detail[table][student].Enrollment_no
                                let Student_name = table_detail[table][student].Student_name
                                tuple_send_data[Enrollment_no] = []
                                en_no_dup.push(Enrollment_no)
                                name_dup.push(Student_name)
                            }
                        }

                        let en_no = [...new Set(en_no_dup)];
                        let name = [...new Set(name_dup)];

                        for (let student = 0; student < no_of_students; student++) {
                            for (let table = 0; table < no_of_tables; table++) {
                                let enrollment_no = table_detail[table][student].Enrollment_no
                                tuple_send_data[enrollment_no].push(table_detail[table][student].total)
                            }
                        }

                        console.log(tuple_send_data)
                        console.log(en_no)
                        console.log(name)

                        en_no.forEach(element => {
                            let total_arr = tuple_send_data[element]
                            // console.log(total_arr)
                            let avg = 0
                            let sum = 0
                            total_arr.forEach(value => {
                                sum += value;
                            });

                            avg = sum / no_of_tables

                            if (avg == 0) {
                                // let avg = Math.random()*100
                                // tuple_send_data[element] = avg
                                // total.push(tuple_send_data[element])

                            }else{
                                tuple_send_data[element] = avg
                                total.push(tuple_send_data[element])
                            }

                        });

                        console.log(total)

                        let student_datails = {
                            students: table_detail,
                            student_name: name,
                            student_en_no: en_no,
                            total: total
                        }
                       
                        response.json(student_datails)

                    }).catch(error => {
                        console.error("Error:", error);
                    });
                }
            }
        }
        else{
            
            if (request.body.timeperiod == 'daily') {
                if (request.body.date == '') {
                    let date_time = new Date();
                    let date = date_time.getDate();
                    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
                    let year = date_time.getFullYear();

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Enrollment_no = '${request.body.search}'`])

                            console.log(data[0])
                            let students = data[0]

                            students.forEach(student => {
                                let lectures = [`d${date}_l1`, `d${date}_l2`, `d${date}_l3`, `d${date}_l4`, `d${date}_l5`, `d${date}_l6`]
                                
                                lectures.forEach(lecture => {
                                    if (student[lecture] == "present") {
                                        student[lecture] = 1
                                    }
                                    else{
                                        student[lecture] = 0
                                    }
                                });
                            });

                            console.log(students)

                            // send data with the render

                            

                            let student_name = []
                            let student_en_no = []
                            let lecture_1 = []
                            let lecture_2 = []
                            let lecture_3 = []
                            let lecture_4 = []
                            let lecture_5 = []
                            let lecture_6 = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                lecture_1.push(student[`d${date}_l1`])
                                lecture_2.push(student[`d${date}_l2`])
                                lecture_3.push(student[`d${date}_l3`])
                                lecture_4.push(student[`d${date}_l4`])
                                lecture_5.push(student[`d${date}_l5`])
                                lecture_6.push(student[`d${date}_l6`])
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                lecture_1: lecture_1,
                                lecture_2: lecture_2,
                                lecture_3: lecture_3,
                                lecture_4: lecture_4,
                                lecture_5: lecture_5,
                                lecture_6: lecture_6,
                            }
                            
                            response.json(student_datails)
                        }
                        
                    }
                }

                else if (request.body.date !== '') {
                    let date_time = request.body.date
                    let date_time_array = date_time.split("-")
                    let year = date_time_array[0]
                    let month = date_time_array[1]
                    let date = date_time_array[2]

                    console.log({
                        date: date,
                        year: year,
                        month: month
                    })

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Enrollment_no = '${request.body.search}'`])

                            console.log(data[0])
                            let students = data[0]

                            students.forEach(student => {
                                let lectures = [`d${date}_l1`, `d${date}_l2`, `d${date}_l3`, `d${date}_l4`, `d${date}_l5`, `d${date}_l6`]
                                
                                lectures.forEach(lecture => {
                                    if (student[lecture] == "present") {
                                        student[lecture] = 1
                                    }
                                    else{
                                        student[lecture] = 0
                                    }
                                });
                            });

                            console.log(students)

                            // send data with the render

                            

                            let student_name = []
                            let student_en_no = []
                            let lecture_1 = []
                            let lecture_2 = []
                            let lecture_3 = []
                            let lecture_4 = []
                            let lecture_5 = []
                            let lecture_6 = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                lecture_1.push(student[`d${date}_l1`])
                                lecture_2.push(student[`d${date}_l2`])
                                lecture_3.push(student[`d${date}_l3`])
                                lecture_4.push(student[`d${date}_l4`])
                                lecture_5.push(student[`d${date}_l5`])
                                lecture_6.push(student[`d${date}_l6`])
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                lecture_1: lecture_1,
                                lecture_2: lecture_2,
                                lecture_3: lecture_3,
                                lecture_4: lecture_4,
                                lecture_5: lecture_5,
                                lecture_6: lecture_6,
                            }
                            
                            response.json(student_datails)
                        }
                        
                    }
                }
            }
            else if (request.body.timeperiod == 'monthly') {
                if (request.body.date == '') {
                    let date_time = new Date();
                    let date = date_time.getDate();
                    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
                    let year = date_time.getFullYear();

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${monthly_table} where Enrollment_no = '${request.body.search}'`])

                            console.log(data[0])
                            let students = data[0]

                            // console.log(students)

                            students.forEach(student => {
                                if (student.total == 0) {
                                    // let random = Math.random() * 100
                                    // console.log(random)
                                    // student.total = random
                                }
                            });

                            // send data with the render

                            let student_name = []
                            let student_en_no = []
                            let monthly_attendance_total = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                monthly_attendance_total.push(student.total)
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                total: monthly_attendance_total
                            }
                            
                            response.json(student_datails)
                        }
                        
                    }
                }

                else if (request.body.date !== '') {
                    let date_time = request.body.date
                    let date_time_array = date_time.split("-")
                    let year = date_time_array[0]
                    let month = date_time_array[1]
                    let date = date_time_array[2]

                    console.log({
                        date: date,
                        year: year,
                        month: month
                    })

                    let url = request.originalUrl
                    let url_array = url.split("/")
                    let info = {
                        faculty: url_array[2],
                        course: url_array[3],
                        branch: url_array[4],
                        sem: request.body.sem
                    }

                    console.log(info)

                    console.log(`{
                        date: ${date},
                        month: ${month},
                        year: ${year}
                    }`)



                    let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                    console.log(data)

                    let student_master_table = `stu${data[0][0].id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${monthly_table} where Enrollment_no = '${request.body.search}'`])

                            console.log(data[0])
                            let students = data[0]

                            // console.log(students)

                            // send data with the render
                            students.forEach(student => {
                                if (student.total == 0) {
                                    // let random = Math.random() * 100
                                    // console.log(random)
                                    // student.total = random
                                }
                            });
                            

                            let student_name = []
                            let student_en_no = []
                            let monthly_attendance_total = []

                            students.forEach(student => {
                                student_en_no.push(student.Enrollment_no)
                                student_name.push(student.Student_name)
                                monthly_attendance_total.push(student.total)
                            });

                            let student_datails = {
                                students: students,
                                student_name: student_name,
                                student_en_no: student_en_no,
                                total: monthly_attendance_total
                            }
                            
                            response.json(student_datails)
                        }
                        
                    }
                }
            }
            else if (request.body.timeperiod == 'total') {
                let url = request.originalUrl
                let url_array = url.split("/")
                let info = {
                    faculty: url_array[2],
                    course: url_array[3],
                    branch: url_array[4],
                    sem: request.body.sem
                }

                console.log(info)

                let data = await dbs.queries([`select distinct id from ${master_table_2} where course = '${info.course}' and branch = '${info.branch}' and sem  = '${info.sem}';`])
                console.log(data)

                let student_master_table = `stu${data[0][0].id}`
                let master_table_exists = await dbs.check(student_master_table)
                // console.log(master_table_exists)

                if (master_table_exists == "table_exists") {

                    let total_no_tables = await dbs.queries([`show tables like '%${student_master_table}'`])

                    let tables_array = []
                
                    total_no_tables[0].forEach(table => {
                        if (table[`Tables_in_student (%${student_master_table})`] == student_master_table) {
                            
                        }
                        else{
                            tables_array.push(table[`Tables_in_student (%${student_master_table})`])
                        }
                    });

                    console.log(tables_array)

                    // let table_detail = []

                    // tables_array.forEach(async table => {
                    //     let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${table} where sr_no > '0'`])

                    //     // console.log(data)
                    //     table_detail.push(data[0])
                    // });
                    
                    // console.log(table_detail)


                    let table_detail = [];

                    Promise.all(tables_array.map(async table => {
                        let data = await dbs.queries([`select sr_no, Enrollment_no, Student_name, total from ${table} where Enrollment_no = '${request.body.search}'`]);
                        table_detail.push(data[0]);
                    })).then(() => {

                        let no_of_tables = tables_array.length
                        let no_of_students = table_detail[0].length
                        let en_no_dup = []
                        let name_dup = []
                        let total = []
                        let tuple_send_data = {

                        }

                        for (let student = 0; student < no_of_students; student++) {
                            for (let table = 0; table < no_of_tables; table++) {
                                let Enrollment_no = table_detail[table][student].Enrollment_no
                                let Student_name = table_detail[table][student].Student_name
                                tuple_send_data[Enrollment_no] = []
                                en_no_dup.push(Enrollment_no)
                                name_dup.push(Student_name)
                            }
                        }

                        let en_no = [...new Set(en_no_dup)];
                        let name = [...new Set(name_dup)];

                        for (let student = 0; student < no_of_students; student++) {
                            for (let table = 0; table < no_of_tables; table++) {
                                let enrollment_no = table_detail[table][student].Enrollment_no
                                tuple_send_data[enrollment_no].push(table_detail[table][student].total)
                            }
                        }

                        console.log(tuple_send_data)
                        console.log(en_no)
                        console.log(name)

                        en_no.forEach(element => {
                            let total_arr = tuple_send_data[element]
                            // console.log(total_arr)
                            let avg = 0
                            let sum = 0
                            total_arr.forEach(value => {
                                sum += value;
                            });

                            avg = sum / no_of_tables

                            if (avg == 0) {
                                // let avg = Math.random()*100
                                // tuple_send_data[element] = avg
                                // total.push(tuple_send_data[element])

                            }else{
                                tuple_send_data[element] = avg
                                total.push(tuple_send_data[element])
                            }

                        });

                        console.log(total)

                        let student_datails = {
                            students: table_detail,
                            student_name: name,
                            student_en_no: en_no,
                            total: total
                        }
                        
                        response.json(student_datails)

                    }).catch(error => {
                        console.error("Error:", error);
                    });
                }
            }
        
        }
    },

    get_overview_chart: async(request, response) => {
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
        }

        let user_role = request.session.user_id.role

        response.render("overview_chart.ejs", {user_id: user_role, info: info})
    },

    overview_chart: async(request, response) => {
        console.log(request.body)
        // console.log("backend")

        if (request.body.date == '') {
            let date_time = new Date();
            let date = date_time.getDate();
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();

            let all_table_details = await dbs.queries([`select id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

            console.log(all_table_details)

            let master_tables_id = []

            all_table_details[0].forEach(element => {
                master_tables_id.push(`stu${element.id}`)
            });

            console.log(master_tables_id)

            //    let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

            if (request.body.timeperiod == 'daily') {
                // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = ['IT', 'CE', 'CIVIL', 'ME', 'AUTO', 'CHEMICAL', 'EC', 'EE']
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        
        
                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {
        
                //         // console.log(total_monthly_table)
        
                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)
                    

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let sum = 0
        
                //             for (let i = 0; i < 6; i++) {
                //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                //                 if (value == 0) {
                //                     value = Math.random() * 100
                //                     sum += value
                //                 }
                //                 else{
                //                     sum += value
                //                 }
        
                //             }
        
                //             let average_attendance = sum/6
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });

                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }

                //             return send_data 
                //         });

                        // await Promise.all(data).then((arrayOfResults) => {
                        //     let data = arrayOfResults.map(result => {
                        //         // console.log(result); // Access sem_2 property of each resolved object

                        //         return result
                        //     });
                        //     console.log(data[0])
                        //     let send_data = data[0]
                        //     response.json(send_data)
                        // });
                //     }
                    
                //     daily_details()
                    
                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            console.log(data[0][0])
                            let sum = 0 
                            

                            for (let i = 0; i < 6; i++) {
                                let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                                if (value == 0) {
                                    // value = Math.random() * 100
                                    // sum += value
                                }
                                else{
                                    sum += value
                                }
        
                            }
        
                            let average_attendance = sum/6
        
                            // console.log(average_attendance)
        
                            // console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            for (let i = 0; i < branches.length; i++) {
                                const branch = branches[i];

                                if (table.branch == branch) {
                                    if (table.sem == 'sem2') {
                                        sem2[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6[i] = average_attendance
                                    }
                                }
                            }

                            // let send_data = {
                            //     sem_2: sem2,
                            //     sem_4: sem4,
                            //     sem_6: sem6,
                            // }

                            



                            // let length = all_table_details[0].length
                            // if (count == length) {
                            //     console.log(send_data)
                            //     console.log("done last")
                            // }
                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
            }
            
            else if (request.body.timeperiod == 'monthly') {
            // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = ['IT', 'CE', 'CIVIL', 'ME', 'AUTO', 'CHEMICAL', 'EC', 'EE']
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        

                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {

                //         // console.log(total_monthly_table)

                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)        

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let average_attendance = 0
        
                //             if (data[0][0].total == 0) {
                //                 average_attendance += Math.random() * 100
                //             }
                //             else{
                //                 average_attendance += data[0][0].total
                //             }
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });  
                            
                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }
        
                //             return send_data 
                //         });
        
                //         await Promise.all(data).then((arrayOfResults) => {
                //             let data = arrayOfResults.map(result => {
                //                 // console.log(result); // Access sem_2 property of each resolved object
        
                //                 return result
                //             });
                //             console.log(data[0])
                //             let send_data = data[0]
                //             response.json(send_data)
                //         });
                //     }

                //     daily_details()
                    

                //     // response.json(send_data)

                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                
                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select total from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            
                            console.log(data)

                            let average_attendance = 0

                            if (data[0][0].total === 0) {
                                // average_attendance += Math.random() * 100
                            }
                            else{
                                average_attendance += data[0][0].total 
                            }
        
                            console.log(average_attendance)
        
                            console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            for (let i = 0; i < branches.length; i++) {
                                const branch = branches[i];

                                if (table.branch == branch) {
                                    if (table.sem == 'sem2') {
                                        sem2[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6[i] = average_attendance
                                    }
                                }
                            }

                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
                
            }
        }

        else if (request.body.date !== '') {
            let date_time = request.body.date
            let date_time_array = date_time.split("-")
            let year = date_time_array[0]
            let month = date_time_array[1]
            let date = date_time_array[2]

            let all_table_details = await dbs.queries([`select distinct id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

            console.log(all_table_details)

            let master_tables_id = []

            all_table_details[0].forEach(element => {
                master_tables_id.push(`stu${element.id}`)
            });

            console.log(master_tables_id)

            //    let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

            if (request.body.timeperiod == 'daily') {
                // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = ['IT', 'CE', 'CIVIL', 'ME', 'AUTO', 'CHEMICAL', 'EC', 'EE']
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        
        
                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {
        
                //         // console.log(total_monthly_table)
        
                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)
                    

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let sum = 0
        
                //             for (let i = 0; i < 6; i++) {
                //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                //                 if (value == 0) {
                //                     value = Math.random() * 100
                //                     sum += value
                //                 }
                //                 else{
                //                     sum += value
                //                 }
        
                //             }
        
                //             let average_attendance = sum/6
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });

                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }

                //             return send_data 
                //         });

                        // await Promise.all(data).then((arrayOfResults) => {
                        //     let data = arrayOfResults.map(result => {
                        //         // console.log(result); // Access sem_2 property of each resolved object

                        //         return result
                        //     });
                        //     console.log(data[0])
                        //     let send_data = data[0]
                        //     response.json(send_data)
                        // });
                //     }
                    
                //     daily_details()
                    
                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            let sum = 0 
                            

                            for (let i = 0; i < 6; i++) {
                                let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                                if (value == 0) {
                                    // value = Math.random() * 100
                                    // sum += value
                                }
                                else{
                                    sum += value
                                }
        
                            }
        
                            let average_attendance = sum/6
        
                            // console.log(average_attendance)
        
                            // console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            for (let i = 0; i < branches.length; i++) {
                                const branch = branches[i];

                                if (table.branch == branch) {
                                    if (table.sem == 'sem2') {
                                        sem2[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6[i] = average_attendance
                                    }
                                }
                            }

                            // let send_data = {
                            //     sem_2: sem2,
                            //     sem_4: sem4,
                            //     sem_6: sem6,
                            // }

                            



                            // let length = all_table_details[0].length
                            // if (count == length) {
                            //     console.log(send_data)
                            //     console.log("done last")
                            // }
                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
            }
            
            else if (request.body.timeperiod == 'monthly') {
            // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = ['IT', 'CE', 'CIVIL', 'ME', 'AUTO', 'CHEMICAL', 'EC', 'EE']
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        

                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {

                //         // console.log(total_monthly_table)

                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)        

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let average_attendance = 0
        
                //             if (data[0][0].total == 0) {
                //                 average_attendance += Math.random() * 100
                //             }
                //             else{
                //                 average_attendance += data[0][0].total
                //             }
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });  
                            
                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }
        
                //             return send_data 
                //         });
        
                //         await Promise.all(data).then((arrayOfResults) => {
                //             let data = arrayOfResults.map(result => {
                //                 // console.log(result); // Access sem_2 property of each resolved object
        
                //                 return result
                //             });
                //             console.log(data[0])
                //             let send_data = data[0]
                //             response.json(send_data)
                //         });
                //     }

                //     daily_details()
                    

                //     // response.json(send_data)

                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                
                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select total from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            
                            console.log(data[0][0].total)

                            let average_attendance = 0

                            if (data[0][0].total === 0) {
                                // average_attendance += Math.random() * 100
                            }
                            else{
                                average_attendance += data[0][0].total 
                            }
        
                            console.log(average_attendance)
        
                            console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            for (let i = 0; i < branches.length; i++) {
                                const branch = branches[i];

                                if (table.branch == branch) {
                                    if (table.sem == 'sem2') {
                                        sem2[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4[i] = average_attendance
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6[i] = average_attendance
                                    }
                                }
                            }

                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
                
            }
        }

        // else if (request.body.date !== '') {
        //     let date_time = request.body.date
        //     let date_time_array = date_time.split("-")
        //     let year = date_time_array[0]
        //     let month = date_time_array[1]
        //     let date = date_time_array[2]

        //     let all_table_details = await dbs.queries([`select distinct id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

        //     let master_tables_id = []

        //     all_table_details[0].forEach(element => {
        //         master_tables_id.push(`stu${element.id}`)
        //     });

        //     console.log(all_table_details)

        //     //  let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //     if (request.body.timeperiod == 'daily') {
        //         // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //         let total_monthly_table = []
        //         let test_send_data = []
        //         // let sem_2 = []
        //         // let sem_4 = []
        //         // let sem_6 = []


        //         // Promise.all(master_tables_id.map(async element => {
        //         //     let data = await dbs.queries([`show tables like '%${element}'`])
        //         //     // console.log(data[0])

        //         //     Promise.all(data[0].map(async table_id => {
                        
        
        //         //         if (table_id[`Tables_in_student (%${element})`] == element) {
        //         //             console.log('master_table')
        //         //         }
        //         //         else{
        //         //             console.log('not master table')
        //         //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
        //         //         }
        //         //     })).then(() => {
        
        //         //         // console.log(total_monthly_table)
        
        //         //     }).catch(error => {
        //         //         console.error("Error:", error);
                        
        //         //     });
                    
        //         // })).then(async () => {

        //         //     console.log(total_monthly_table)
                    

        //         //     async function daily_details() {
        //         //         let sem_2 = []
        //         //         let sem_4 = []
        //         //         let sem_6 = []

        //         //         let data = total_monthly_table.map(async element => {
        //         //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
        //         //             console.log(data)
        //         //             let sum = 0
        
        //         //             for (let i = 0; i < 6; i++) {
        //         //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
        //         //                 if (value == 0) {
        //         //                     value = Math.random() * 100
        //         //                     sum += value
        //         //                 }
        //         //                 else{
        //         //                     sum += value
        //         //                 }
        
        //         //             }
        
        //         //             let average_attendance = sum/6
        
        //         //             console.log(average_attendance)
        
        //         //             let element_arr = element.split("_")
        //         //             let master_table_name = element_arr[2]
        //         //             let id_arr = master_table_name.split("stu")
        //         //             let master_table_id = id_arr[1]
        //         //             console.log(master_table_name)
        //         //             console.log(master_table_id)
        //         //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
        //         //             all_table_details[0].forEach(element => {
        //         //                 if (master_table_id == element.id) {
        //         //                     let push_data = {
        //         //                         id: element.id,
        //         //                         branch: element.branch,
        //         //                         sem: element.sem,
        //         //                         daily_attendance: average_attendance
        //         //                     }
        //         //                     test_send_data.push(push_data)
        
        //         //                     for (let i = 0; i < branches.length; i++) {
        //         //                         const branch = branches[i];
        //         //                         if (branch == element.branch && element.sem == 'sem2') {
        //         //                             sem_2.push(average_attendance)
        //         //                         }
        //         //                         else if (branch == element.branch && element.sem == 'sem4') {
        //         //                             sem_4.push(average_attendance)
        //         //                         }
        //         //                         else if (branch == element.branch && element.sem == 'sem6') {
        //         //                             sem_6.push(average_attendance)
        //         //                         }
        //         //                     }
        //         //                 }
        //         //             });

        //         //             let send_data = {
        //         //                 sem_2: sem_2,
        //         //                 sem_4: sem_4,
        //         //                 sem_6: sem_6,
        //         //             }

        //         //             return send_data 
        //         //         });

        //         //         await Promise.all(data).then((arrayOfResults) => {
        //         //             let data = arrayOfResults.map(result => {
        //         //                 // console.log(result); // Access sem_2 property of each resolved object

        //         //                 return result
        //         //             });
        //         //             console.log(data[0])
        //         //             let send_data = data[0]
        //         //             response.json(send_data)
        //         //         });
        //         //     }
                    
        //         //     daily_details()
                    
        //         // }).catch(error => {
        //         //     console.error("Error:", error);
        //         // });




        //     }
            
        //     else if (request.body.timeperiod == 'monthly') {
        //     // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //         let total_monthly_table = []
        //         let test_send_data = []
        //         // let sem_2 = []
        //         // let sem_4 = []
        //         // let sem_6 = []


        //         Promise.all(master_tables_id.map(async element => {
        //             let data = await dbs.queries([`show tables like '%${element}'`])
        //             // console.log(data[0])

        //             Promise.all(data[0].map(async table_id => {
                        

        //                 if (table_id[`Tables_in_student (%${element})`] == element) {
        //                     console.log('master_table')
        //                 }
        //                 else{
        //                     console.log('not master table')
        //                     total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
        //                 }
        //             })).then(() => {

        //                 // console.log(total_monthly_table)

        //             }).catch(error => {
        //                 console.error("Error:", error);
                        
        //             });
                    
        //         })).then(async () => {

        //             console.log(total_monthly_table)        

        //             async function daily_details() {
        //                 let sem_2 = []
        //                 let sem_4 = []
        //                 let sem_6 = []

        //                 let data = total_monthly_table.map(async element => {
        //                     let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
        //                     console.log(data)
        //                     let average_attendance = 0
        
        //                     if (data[0][0].total == 0) {
        //                         average_attendance += Math.random() * 100
        //                     }
        //                     else{
        //                         average_attendance += data[0][0].total
        //                     }
        
        //                     console.log(average_attendance)
        
        //                     let element_arr = element.split("_")
        //                     let master_table_name = element_arr[2]
        //                     let id_arr = master_table_name.split("stu")
        //                     let master_table_id = id_arr[1]
        //                     console.log(master_table_name)
        //                     console.log(master_table_id)
        //                     let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
        //                     all_table_details[0].forEach(element => {
        //                         if (master_table_id == element.id) {
        //                             let push_data = {
        //                                 id: element.id,
        //                                 branch: element.branch,
        //                                 sem: element.sem,
        //                                 daily_attendance: average_attendance
        //                             }
        //                             test_send_data.push(push_data)
        
        //                             for (let i = 0; i < branches.length; i++) {
        //                                 const branch = branches[i];
        //                                 if (branch == element.branch && element.sem == 'sem2') {
        //                                     sem_2.push(average_attendance)
        //                                 }
        //                                 else if (branch == element.branch && element.sem == 'sem4') {
        //                                     sem_4.push(average_attendance)
        //                                 }
        //                                 else if (branch == element.branch && element.sem == 'sem6') {
        //                                     sem_6.push(average_attendance)
        //                                 }
        //                             }
        //                         }
        //                     });  
                            
        //                     let send_data = {
        //                         sem_2: sem_2,
        //                         sem_4: sem_4,
        //                         sem_6: sem_6,
        //                     }
        
        //                     return send_data 
        //                 });
        
        //                 await Promise.all(data).then((arrayOfResults) => {
        //                     let data = arrayOfResults.map(result => {
        //                         // console.log(result); // Access sem_2 property of each resolved object
        
        //                         return result
        //                     });
        //                     console.log(data[0])
        //                     let send_data = data[0]
        //                     response.json(send_data)
        //                 });
        //             }

        //             daily_details()
                    

        //             // response.json(send_data)

        //         }).catch(error => {
        //             console.error("Error:", error);
        //         });

                

                
        //     }
        // }
    },

    branch_get_overview_chart: async(request, response) => {
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4]
        }

        console.log(info)

        let user_role = request.session.user_id.role

        response.render("branch_overview_chart.ejs", {user_id: user_role, info: info})
    },

    branch_overview_chart: async(request, response) => {
        console.log(request.body)
        // console.log("backend")
        console.log(request.originalUrl)
        let url = request.originalUrl
        let url_array = url.split("/")
        let info = {
            faculty: url_array[2],
            course: url_array[3],
            branch: url_array[4],
        }

        if (request.body.date == '') {
            let date_time = new Date();
            let date = date_time.getDate();
            let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
            let year = date_time.getFullYear();

            let all_table_details = await dbs.queries([`select distinct id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

            console.log(all_table_details)

            let master_tables_id = []

            all_table_details[0].forEach(element => {
                master_tables_id.push(`stu${element.id}`)
            });

            console.log(master_tables_id)

            //    let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

            if (request.body.timeperiod == 'daily') {
                // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = info.branch
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        
        
                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {
        
                //         // console.log(total_monthly_table)
        
                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)
                    

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let sum = 0
        
                //             for (let i = 0; i < 6; i++) {
                //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                //                 if (value == 0) {
                //                     value = Math.random() * 100
                //                     sum += value
                //                 }
                //                 else{
                //                     sum += value
                //                 }
        
                //             }
        
                //             let average_attendance = sum/6
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });

                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }

                //             return send_data 
                //         });

                        // await Promise.all(data).then((arrayOfResults) => {
                        //     let data = arrayOfResults.map(result => {
                        //         // console.log(result); // Access sem_2 property of each resolved object

                        //         return result
                        //     });
                        //     console.log(data[0])
                        //     let send_data = data[0]
                        //     response.json(send_data)
                        // });
                //     }
                    
                //     daily_details()
                    
                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            console.log(data[0][0])
                            let sum = 0 
                            

                            for (let i = 0; i < 6; i++) {
                                let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                                if (value == 0) {
                                    // value = Math.random() * 100
                                    // sum += value
                                }
                                else{
                                    sum += value
                                }
        
                            }
        
                            let average_attendance = sum/6
        
                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            console.log(average_attendance)

                            // test_send_data.push(data_to_send)


                                console.log(branches, table.branch)

                                if (table.branch == branches) {
                                    if (table.sem == 'sem2') {
                                        sem2.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6.push(average_attendance)
                                    }
                                }
                            

                            // let send_data = {
                            //     sem_2: sem2,
                            //     sem_4: sem4,
                            //     sem_6: sem6,
                            // }

                            



                            // let length = all_table_details[0].length
                            // if (count == length) {
                            //     console.log(send_data)
                            //     console.log("done last")
                            // }
                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                        branch: [info.branch]
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
            }
            
            else if (request.body.timeperiod == 'monthly') {
            // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = info.branch
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        

                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {

                //         // console.log(total_monthly_table)

                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)        

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let average_attendance = 0
        
                //             if (data[0][0].total == 0) {
                //                 average_attendance += Math.random() * 100
                //             }
                //             else{
                //                 average_attendance += data[0][0].total
                //             }
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });  
                            
                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }
        
                //             return send_data 
                //         });
        
                //         await Promise.all(data).then((arrayOfResults) => {
                //             let data = arrayOfResults.map(result => {
                //                 // console.log(result); // Access sem_2 property of each resolved object
        
                //                 return result
                //             });
                //             console.log(data[0])
                //             let send_data = data[0]
                //             response.json(send_data)
                //         });
                //     }

                //     daily_details()
                    

                //     // response.json(send_data)

                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                
                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        // console.log(student_master_table)
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select total from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            
                            console.log(data)

                            let average_attendance = 0

                            if (data[0][0].total === 0) {
                                // average_attendance += Math.random() * 100
                            }
                            else{
                                average_attendance += data[0][0].total 
                            }
        
                            console.log(average_attendance)
        
                            console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)


                            console.log(branches, table.branch)

                            if (table.branch == branches) {
                                if (table.sem == 'sem2') {
                                    sem2.push(average_attendance)
                                }
                                else if (table.sem == 'sem4') {
                                    sem4.push(average_attendance)
                                }
                                else if (table.sem == 'sem6') {
                                    sem6.push(average_attendance)
                                }
                            }

                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                        branch: [info.branch]
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
                
            }
        }

        else if (request.body.date !== '') {
            let date_time = request.body.date
            let date_time_array = date_time.split("-")
            let year = date_time_array[0]
            let month = date_time_array[1]
            let date = date_time_array[2]

            console.log(request.originalUrl)
            let url = request.originalUrl
            let url_array = url.split("/")
            let info = {
                faculty: url_array[2],
                course: url_array[3],
                branch: url_array[4],
            }

            let all_table_details = await dbs.queries([`select distinct id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

            // console.log(all_table_details)

            let master_tables_id = []

            all_table_details[0].forEach(element => {
                master_tables_id.push(`stu${element.id}`)
            });

            // console.log(master_tables_id)

            //    let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

            if (request.body.timeperiod == 'daily') {
                // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = info.branch
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        
        
                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {
        
                //         // console.log(total_monthly_table)
        
                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)
                    

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let sum = 0
        
                //             for (let i = 0; i < 6; i++) {
                //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                //                 if (value == 0) {
                //                     value = Math.random() * 100
                //                     sum += value
                //                 }
                //                 else{
                //                     sum += value
                //                 }
        
                //             }
        
                //             let average_attendance = sum/6
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });

                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }

                //             return send_data 
                //         });

                        // await Promise.all(data).then((arrayOfResults) => {
                        //     let data = arrayOfResults.map(result => {
                        //         // console.log(result); // Access sem_2 property of each resolved object

                        //         return result
                        //     });
                        //     console.log(data[0])
                        //     let send_data = data[0]
                        //     response.json(send_data)
                        // });
                //     }
                    
                //     daily_details()
                    
                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select d${date}_l1,  d${date}_l2,  d${date}_l3,  d${date}_l4,  d${date}_l5,  d${date}_l6 from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            let sum = 0 
                            

                            for (let i = 0; i < 6; i++) {
                                let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
                                if (value == 0) {
                                    // value = Math.random() * 100
                                    // sum += value
                                }
                                else{
                                    sum += value
                                }
        
                            }
        
                            let average_attendance = sum/6
        
                            // console.log(average_attendance)
        
                            // console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            console.log(branches, table.branch)

                                if (table.branch == branches) {
                                    if (table.sem == 'sem2') {
                                        sem2.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6.push(average_attendance)
                                    }
                                }

                            // let send_data = {
                            //     sem_2: sem2,
                            //     sem_4: sem4,
                            //     sem_6: sem6,
                            // }

                            



                            // let length = all_table_details[0].length
                            // if (count == length) {
                            //     console.log(send_data)
                            //     console.log("done last")
                            // }
                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                        branch: [info.branch]
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
            }
            
            else if (request.body.timeperiod == 'monthly') {
            // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

                let test_send_data = []
                let branches = info.branch
                let sem2 = []
                let sem4 = []
                let sem6 = []
                let count = 0


                // Promise.all(master_tables_id.map(async element => {
                //     let data = await dbs.queries([`show tables like '%${element}'`])
                //     // console.log(data[0])

                //     Promise.all(data[0].map(async table_id => {
                        

                //         if (table_id[`Tables_in_student (%${element})`] == element) {
                //             console.log('master_table')
                //         }
                //         else{
                //             console.log('not master table')
                //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
                //         }
                //     })).then(() => {

                //         // console.log(total_monthly_table)

                //     }).catch(error => {
                //         console.error("Error:", error);
                        
                //     });
                    
                // })).then(async () => {

                //     console.log(total_monthly_table)        

                //     async function daily_details() {
                //         let sem_2 = []
                //         let sem_4 = []
                //         let sem_6 = []

                //         let data = total_monthly_table.map(async element => {
                //             let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
                //             console.log(data)
                //             let average_attendance = 0
        
                //             if (data[0][0].total == 0) {
                //                 average_attendance += Math.random() * 100
                //             }
                //             else{
                //                 average_attendance += data[0][0].total
                //             }
        
                //             console.log(average_attendance)
        
                //             let element_arr = element.split("_")
                //             let master_table_name = element_arr[2]
                //             let id_arr = master_table_name.split("stu")
                //             let master_table_id = id_arr[1]
                //             console.log(master_table_name)
                //             console.log(master_table_id)
                //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
                //             all_table_details[0].forEach(element => {
                //                 if (master_table_id == element.id) {
                //                     let push_data = {
                //                         id: element.id,
                //                         branch: element.branch,
                //                         sem: element.sem,
                //                         daily_attendance: average_attendance
                //                     }
                //                     test_send_data.push(push_data)
        
                //                     for (let i = 0; i < branches.length; i++) {
                //                         const branch = branches[i];
                //                         if (branch == element.branch && element.sem == 'sem2') {
                //                             sem_2.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem4') {
                //                             sem_4.push(average_attendance)
                //                         }
                //                         else if (branch == element.branch && element.sem == 'sem6') {
                //                             sem_6.push(average_attendance)
                //                         }
                //                     }
                //                 }
                //             });  
                            
                //             let send_data = {
                //                 sem_2: sem_2,
                //                 sem_4: sem_4,
                //                 sem_6: sem_6,
                //             }
        
                //             return send_data 
                //         });
        
                //         await Promise.all(data).then((arrayOfResults) => {
                //             let data = arrayOfResults.map(result => {
                //                 // console.log(result); // Access sem_2 property of each resolved object
        
                //                 return result
                //             });
                //             console.log(data[0])
                //             let send_data = data[0]
                //             response.json(send_data)
                //         });
                //     }

                //     daily_details()
                    

                //     // response.json(send_data)

                // }).catch(error => {
                //     console.error("Error:", error);
                // });

                
                let data = await all_table_details[0].map(async table => {
                    count = count + 1
                    let student_master_table = `stu${table.id}`
                    let master_table_exists = await dbs.check(student_master_table)
                    // console.log(master_table_exists)

                    if (master_table_exists == "table_exists") {
                        // previous year's attendance
                        let monthly_table = `y${year}_m${month}_${student_master_table}`
                        let monthly_table_exists = await dbs.check(monthly_table)

                        if (monthly_table_exists == "table_exists") {
                            // select the necessary data
                            // console.log(monthly_table)
                            let data = await dbs.queries([`select total from ${monthly_table} where Student_name = '% ATTENDANCE'`])

                            // console.log(data[0][0])
                            
                            console.log(data[0][0].total)

                            let average_attendance = 0

                            if (data[0][0].total === 0) {
                                // average_attendance += Math.random() * 100
                            }
                            else{
                                average_attendance += data[0][0].total 
                            }
        
                            console.log(average_attendance)
        
                            console.log(table)

                            let data_to_send = {
                                table_info: table,
                                average_attendance: average_attendance
                            }

                            // test_send_data.push(data_to_send)

                            console.log(branches, table.branch)

                                if (table.branch == branches) {
                                    if (table.sem == 'sem2') {
                                        sem2.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem4') {
                                        sem4.push(average_attendance)
                                    }
                                    else if (table.sem == 'sem6') {
                                        sem6.push(average_attendance)
                                    }
                                }

                        }
                        
                    }

                    let send_data = {
                        sem_2: sem2,
                        sem_4: sem4,
                        sem_6: sem6,
                        branch: [info.branch]
                    }

                    let length = all_table_details[0].length
                    if (count === length) {
                        return send_data
                    }
                });


                await Promise.all(data).then((arrayOfResults) => {
                    let data = arrayOfResults.map(result => {
                        // console.log(result); // Access sem_2 property of each resolved object

                        return result
                    });
                    console.log(data[0])
                    let send_data = data[0]
                    response.json(send_data)
                });
                
            }
        }

        // else if (request.body.date !== '') {
        //     let date_time = request.body.date
        //     let date_time_array = date_time.split("-")
        //     let year = date_time_array[0]
        //     let month = date_time_array[1]
        //     let date = date_time_array[2]

        //     let all_table_details = await dbs.queries([`select distinct id, branch, sem from ${master_table_2} where faculty = '${request.body.url.faculty}' and current_state = 'ongoing'`])

        //     let master_tables_id = []

        //     all_table_details[0].forEach(element => {
        //         master_tables_id.push(`stu${element.id}`)
        //     });

        //     console.log(all_table_details)

        //     //  let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //     if (request.body.timeperiod == 'daily') {
        //         // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //         let total_monthly_table = []
        //         let test_send_data = []
        //         // let sem_2 = []
        //         // let sem_4 = []
        //         // let sem_6 = []


        //         // Promise.all(master_tables_id.map(async element => {
        //         //     let data = await dbs.queries([`show tables like '%${element}'`])
        //         //     // console.log(data[0])

        //         //     Promise.all(data[0].map(async table_id => {
                        
        
        //         //         if (table_id[`Tables_in_student (%${element})`] == element) {
        //         //             console.log('master_table')
        //         //         }
        //         //         else{
        //         //             console.log('not master table')
        //         //             total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
        //         //         }
        //         //     })).then(() => {
        
        //         //         // console.log(total_monthly_table)
        
        //         //     }).catch(error => {
        //         //         console.error("Error:", error);
                        
        //         //     });
                    
        //         // })).then(async () => {

        //         //     console.log(total_monthly_table)
                    

        //         //     async function daily_details() {
        //         //         let sem_2 = []
        //         //         let sem_4 = []
        //         //         let sem_6 = []

        //         //         let data = total_monthly_table.map(async element => {
        //         //             let data = await dbs.queries([`select d${date}_l1, d${date}_l2, d${date}_l3, d${date}_l4, d${date}_l5, d${date}_l6 from ${element} where Student_name = '% ATTENDANCE'`])
        
        //         //             console.log(data)
        //         //             let sum = 0
        
        //         //             for (let i = 0; i < 6; i++) {
        //         //                 let value = parseInt(data[0][0][`d${date}_l${i+1}`])
        
        //         //                 if (value == 0) {
        //         //                     value = Math.random() * 100
        //         //                     sum += value
        //         //                 }
        //         //                 else{
        //         //                     sum += value
        //         //                 }
        
        //         //             }
        
        //         //             let average_attendance = sum/6
        
        //         //             console.log(average_attendance)
        
        //         //             let element_arr = element.split("_")
        //         //             let master_table_name = element_arr[2]
        //         //             let id_arr = master_table_name.split("stu")
        //         //             let master_table_id = id_arr[1]
        //         //             console.log(master_table_name)
        //         //             console.log(master_table_id)
        //         //             let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
        //         //             all_table_details[0].forEach(element => {
        //         //                 if (master_table_id == element.id) {
        //         //                     let push_data = {
        //         //                         id: element.id,
        //         //                         branch: element.branch,
        //         //                         sem: element.sem,
        //         //                         daily_attendance: average_attendance
        //         //                     }
        //         //                     test_send_data.push(push_data)
        
        //         //                     for (let i = 0; i < branches.length; i++) {
        //         //                         const branch = branches[i];
        //         //                         if (branch == element.branch && element.sem == 'sem2') {
        //         //                             sem_2.push(average_attendance)
        //         //                         }
        //         //                         else if (branch == element.branch && element.sem == 'sem4') {
        //         //                             sem_4.push(average_attendance)
        //         //                         }
        //         //                         else if (branch == element.branch && element.sem == 'sem6') {
        //         //                             sem_6.push(average_attendance)
        //         //                         }
        //         //                     }
        //         //                 }
        //         //             });

        //         //             let send_data = {
        //         //                 sem_2: sem_2,
        //         //                 sem_4: sem_4,
        //         //                 sem_6: sem_6,
        //         //             }

        //         //             return send_data 
        //         //         });

        //         //         await Promise.all(data).then((arrayOfResults) => {
        //         //             let data = arrayOfResults.map(result => {
        //         //                 // console.log(result); // Access sem_2 property of each resolved object

        //         //                 return result
        //         //             });
        //         //             console.log(data[0])
        //         //             let send_data = data[0]
        //         //             response.json(send_data)
        //         //         });
        //         //     }
                    
        //         //     daily_details()
                    
        //         // }).catch(error => {
        //         //     console.error("Error:", error);
        //         // });




        //     }
            
        //     else if (request.body.timeperiod == 'monthly') {
        //     // let total_monthly_table = await dbs.queries([`show tables like '%${master_tables_id}'`])

        //         let total_monthly_table = []
        //         let test_send_data = []
        //         // let sem_2 = []
        //         // let sem_4 = []
        //         // let sem_6 = []


        //         Promise.all(master_tables_id.map(async element => {
        //             let data = await dbs.queries([`show tables like '%${element}'`])
        //             // console.log(data[0])

        //             Promise.all(data[0].map(async table_id => {
                        

        //                 if (table_id[`Tables_in_student (%${element})`] == element) {
        //                     console.log('master_table')
        //                 }
        //                 else{
        //                     console.log('not master table')
        //                     total_monthly_table.push(table_id[`Tables_in_student (%${element})`])
        //                 }
        //             })).then(() => {

        //                 // console.log(total_monthly_table)

        //             }).catch(error => {
        //                 console.error("Error:", error);
                        
        //             });
                    
        //         })).then(async () => {

        //             console.log(total_monthly_table)        

        //             async function daily_details() {
        //                 let sem_2 = []
        //                 let sem_4 = []
        //                 let sem_6 = []

        //                 let data = total_monthly_table.map(async element => {
        //                     let data = await dbs.queries([`select total from ${element} where Student_name = '% ATTENDANCE'`])
        
        //                     console.log(data)
        //                     let average_attendance = 0
        
        //                     if (data[0][0].total == 0) {
        //                         average_attendance += Math.random() * 100
        //                     }
        //                     else{
        //                         average_attendance += data[0][0].total
        //                     }
        
        //                     console.log(average_attendance)
        
        //                     let element_arr = element.split("_")
        //                     let master_table_name = element_arr[2]
        //                     let id_arr = master_table_name.split("stu")
        //                     let master_table_id = id_arr[1]
        //                     console.log(master_table_name)
        //                     console.log(master_table_id)
        //                     let branches = ['IT', 'CE', 'CIVIL', 'MECH', 'AUTO', 'CHEMICAL', 'CE', 'ECE']
        
        //                     all_table_details[0].forEach(element => {
        //                         if (master_table_id == element.id) {
        //                             let push_data = {
        //                                 id: element.id,
        //                                 branch: element.branch,
        //                                 sem: element.sem,
        //                                 daily_attendance: average_attendance
        //                             }
        //                             test_send_data.push(push_data)
        
        //                             for (let i = 0; i < branches.length; i++) {
        //                                 const branch = branches[i];
        //                                 if (branch == element.branch && element.sem == 'sem2') {
        //                                     sem_2.push(average_attendance)
        //                                 }
        //                                 else if (branch == element.branch && element.sem == 'sem4') {
        //                                     sem_4.push(average_attendance)
        //                                 }
        //                                 else if (branch == element.branch && element.sem == 'sem6') {
        //                                     sem_6.push(average_attendance)
        //                                 }
        //                             }
        //                         }
        //                     });  
                            
        //                     let send_data = {
        //                         sem_2: sem_2,
        //                         sem_4: sem_4,
        //                         sem_6: sem_6,
        //                     }
        
        //                     return send_data 
        //                 });
        
        //                 await Promise.all(data).then((arrayOfResults) => {
        //                     let data = arrayOfResults.map(result => {
        //                         // console.log(result); // Access sem_2 property of each resolved object
        
        //                         return result
        //                     });
        //                     console.log(data[0])
        //                     let send_data = data[0]
        //                     response.json(send_data)
        //                 });
        //             }

        //             daily_details()
                    

        //             // response.json(send_data)

        //         }).catch(error => {
        //             console.error("Error:", error);
        //         });

                

                
        //     }
        // }
    },
}