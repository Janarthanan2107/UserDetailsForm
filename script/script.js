'use strict';
//inputs
const usernameEl = document.getElementById("username")
const emailEl = document.getElementById("email")
const professionEl = document.getElementById("profession")
const contactEl = document.getElementById("contact")
const dobEl = document.getElementById("date")
const maleEl = document.getElementById("male")
const femaleEl = document.getElementById("female")
const othersEl = document.getElementById("others")
const submitBtn = document.getElementById("submit")
//outputs
const bodyContainer = document.getElementById("tablebody")

// global Variables
let items = [
    { id: 1, username: "Jana", email: "Janarthanan@gmail.com", profession: "FullStack Developer", contact: "8110864319", dob: "07/10/2000", gender: "male" },
    { id: 2, username: "Shalini", email: "ShaliniSkt@gmail.com", profession: "Python Developer", contact: "8667247110", dob: "21/03/2003", gender: "female" },
]
//functions
const init = () => {
    // existing data displayed
    getData(items)
}

const rowTemplate = (item) => {
    const { username, email, profession, contact, dob, gender } = item
    const rowEl = document.createElement("tr")
    rowEl.classList.add("datatable-row")
    rowEl.innerHTML = `
    <td>${username}</td>
    <td>${email}</td>
    <td>${profession}</td>
    <td>${contact}</td>
    <td>${dob}</td>
    <td>${gender}</td>
    <td>
        <div class="option">
            <button class="btn-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    </td>
    `
    bodyContainer.appendChild(rowEl)
}

const getData = (items) => {
    bodyContainer.innerHTML = ""
    
    if (items.length > 0) {
        items.forEach(element => {
            rowTemplate(element)
        });
    }
}

//events

//initial settings
init();
