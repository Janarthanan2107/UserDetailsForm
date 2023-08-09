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
    // existing data or upcoming data displayed here
    getData(items)
}

const rowTemplate = (item) => {
    const { id, username, email, profession, contact, dob, gender } = item
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
            <button class="btn-delete" onclick="deleteRow(${id})"><i class="fa-solid fa-trash"></i></button>
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

const deleteRow = (id) => {
    items = items.filter((item) => item.id !== id)
    getData(items)
}

submitBtn.addEventListener("click", () => {
    const username = usernameEl.value;
    const email = emailEl.value;
    const selectedProfession = professionEl.options[professionEl.selectedIndex].value; // Get the selected profession value
    const contact = contactEl.value;
    const dob = dobEl.value;
    const gender = maleEl.checked ? "male" : (femaleEl.checked ? "female" : (othersEl.checked ? "others" : ""))

    if (username && email && selectedProfession && contact && dob && gender) {
        const newItem = {
            id: Date.now(),
            username: username,
            email: email,
            profession: selectedProfession, // Use the selectedProfession here
            contact: contact,
            dob: dob,
            gender: gender
        };
        items.push(newItem);

        usernameEl.value = null
        emailEl.value = null
        professionEl.value = "Enter Your Profession"
        contactEl.value = null
        dobEl.value = null
        maleEl.checked = null
        femaleEl.checked = null
        othersEl.checked = null
        getData(items);
    } else {
        alert("All inputs are mandatory");
    }
});


//events

//initial settings
init();
