// let form = document.querySelector('form')
// form.addEventListener('submit', function (event) {
//     let options = document.querySelectorAll('.options')
//     options.forEach(option => {
//         option.checked = true
        
//     });
//     let selectAll = document.querySelector('#selectAll')
//     selectAll.checked = false
//     let present = document.querySelector('#present')
//     present.checked = false
//     let absent = document.querySelector('#absent')
//     absent.checked = false
//     form.submit()
// })





// let course = document.querySelector("#course")
// course.addEventListener('change', function () {
//     console.log("this workd")
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', '/info/courses', true)
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.onload = function () {
//         let data = JSON.parse(this.responseText)
//         let branch = data.branch
//         let sem = data.sem
//         console.log(data + "this is data")


//         reset_parent('#branch', `<option value="">select a branch</option>`)
//         reset_parent('#sem', `<option value="">select a semister</option>`)
//         branch.forEach(elem => {
//             addElement_in_HTML('#branch', "option", `${elem.branch}`)
//         });
//         sem.forEach(elem => {
//             addElement_in_HTML('#sem', "option", `${elem.sem}`)
//         });
        
//     }
//     let value = course.value
//     const body = JSON.stringify({
//         value: value
//     });
//     xhr.send(body)
// })



let sem = document.querySelector("#sem")
sem.addEventListener('change', function () {
    console.log("this workd")
    const xhr = new XMLHttpRequest();

    xhr.open('POST', '/info/sem', true)
    xhr.setRequestHeader('Content-type', 'application/json')
    xhr.onload = function () {
        let data = JSON.parse(this.responseText)
        let subjects = data.subject

        reset_parent('#subject', `<option value="">select a subject</option>`)
        subjects.forEach(subject => {
            addElement_in_HTML('#subject', "option", `${subject.subject}`)
        });
    }
    // let branch = document.querySelector("#branch")
    // let course_value = course.value
    // let branch_value = branch.value
    let url = window.location.href
    let url_array = url.split("/")
    console.log(url_array[5], url_array[6])
    let sem_value = sem.value
    const body = JSON.stringify({
        course: url_array[5],
        branch: url_array[6],
        sem: sem_value
    });
    xhr.send(body)
})

let url = window.location.href
let url_array = url.split("/")
console.log(url_array)

// let submit = document.querySelector("#submit_btn")
// submit.addEventListener('change', function () {
//     console.log("this workd")
//     const xhr = new XMLHttpRequest();

//     let url = window.location.href
//     let url_array = url.split("/")
//     console.log(url_array[3], url_array[5], url_array[6])
//     let sem = document.querySelector("#sem")
//     let sem_value = sem.value

//     let subject = document.querySelector("#subject")
//     let subject_value = subject.value

//     xhr.open('POST', `${url_array[3]}/branchCoures/ <%=info.course%>/<%=info.branch%>/getTable`, true)
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.onload = function () {
//         let data = JSON.parse(this.responseText)
//         let subjects = data.subject

//         reset_parent('#subject', `<option value="">select a subject</option>`)
//         subjects.forEach(subject => {
//             addElement_in_HTML('#subject', "option", `${subject.subject}`)
//         });
//     }
//     // let branch = document.querySelector("#branch")
//     // let course_value = course.value
//     // let branch_value = branch.value

//     const body = JSON.stringify({
//         course: url_array[5],
//         branch: url_array[6],
//         sem: sem_value,
//         subject: subject_value
//     });
//     xhr.send(body)
// })

function addElement_in_HTML(parent, child, value) {
    let parent_ = document.querySelector(`${parent}`)
    let child_ = document.createElement(`${child}`)
    child_.id = value
    child_.value = value
    child_.innerText = value
    child_.setAttribute('name', `${value}`)
    parent_.append(child_)
}

function reset_parent(parent, value) {
    document.querySelector(`${parent}`).innerHTML = `${value}`
}


