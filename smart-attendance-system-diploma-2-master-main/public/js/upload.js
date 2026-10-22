// let submit_btn = document.querySelector('#submit_btn')
// submit_btn.addEventListener('click', function () {
//     const xhr = new XMLHttpRequest();

//     xhr.open('POST', '/info/sem', true)
//     xhr.setRequestHeader('Content-type', 'application/json')
//     xhr.onload = function () {
//         let data = JSON.parse(this.responseText)
//         let subjects = data.subject

//         reset_parent('#subject', `<option value="">select a subject</option>`)
//         subjects.forEach(subject => {
//             addElement_in_HTML('#subject', "option", `${subject.subject}`)
//         });
//     }
//     let url = window.location.href
//     let url_array = url.split("/")
//     console.log(url_array[5], url_array[6])
//     let sem_value = sem.value
//     const body = JSON.stringify({
//         course: url_array[5],
//         branch: url_array[6],
//         sem: sem_value
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


