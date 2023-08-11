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
// DataBase
let items = [
    { id: 1, username: "Jana", email: "Janarthanan@gmail.com", profession: "FullStack Developer", contact: "8110864319", dob: "2000-10-07", gender: "male" },
    { id: 2, username: "Shalini", email: "ShaliniSkt@gmail.com", profession: "Python Developer", contact: "8667247110", dob: "2003-03-21", gender: "female" },
]
let isEditing;
let itemToEdit;

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
    <td>${username.charAt(0).toUpperCase() + username.slice(1)}</td>
    <td>${email.charAt(0).toUpperCase() + email.slice(1)}</td>
    <td>${profession}</td>
    <td>${contact}</td>
    <td>${dob}</td>
    <td>${gender.charAt(0).toUpperCase() + gender.slice(1)}</td>
    <td>
        <div class="option">
            <button class="btn-edit" onClick="updateRow(${id})"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-delete" onclick="deleteRow(${id})"><i class="fa-solid fa-trash"></i></button>
        </div>
    </td>
    `
    bodyContainer.appendChild(rowEl)
}

const getData = (items) => {
    bodyContainer.innerHTML = ""

    items.forEach(item => {
        rowTemplate(item)
    });
}

const nullishData = () => {
    usernameEl.value = ''
    emailEl.value = ''
    professionEl.value = 'Enter Your Profession'
    contactEl.value = ''
    dobEl.value = ''
    maleEl.checked = false;
    femaleEl.checked = false;
    othersEl.checked = false;
}

const deleteRow = (id) => {
    items = items.filter((item) => item.id !== id)
    console.log(items)
    getData(items)
}

const updateRow = (id) => {
    isEditing = true
    submitBtn.innerText = "Update"
    console.log("Yes Im ready to edit")
    // finding the data with id
    itemToEdit = items.find((item) => item.id === id)
    console.log(itemToEdit)

    // updating El with the found values
    usernameEl.value = itemToEdit.username;
    emailEl.value = itemToEdit.email;
    professionEl.value = itemToEdit.profession;
    contactEl.value = itemToEdit.contact;
    dobEl.value = itemToEdit.dob;
    // updating the genderEl with value
    if (itemToEdit.gender === "male") {
        maleEl.checked = true;
    } else if (itemToEdit.gender === "female") {
        femaleEl.checked = true;
    } else if (itemToEdit.gender === "others") {
        othersEl.checked = true;
    }
}

//events
submitBtn.addEventListener("click", () => {
    const username = usernameEl.value;
    const email = emailEl.value;
    const profession = professionEl.value;
    const contact = contactEl.value;
    const dob = dobEl.value;
    const gender = maleEl.checked ? "male" : "" || femaleEl.checked ? "female" : "" || othersEl.checked ? "others" : "";
    console.log(`username:${username}, email:${email}, profession:${profession}, contact:${contact}, dob:${dob}, gender:${gender}`)

    if (username && email && profession) {
        if (isEditing) {
            //Update an existing
            const updateItems = {
                id: itemToEdit.id,
                username: username,
                email: email,
                profession: profession,
                contact: contact,
                dob: dob,
                gender: gender
            }

            // Find the index of the item to update
            const indexToUpdate = items.findIndex((item) => item.id === itemToEdit.id)
            items[indexToUpdate] = updateItems

            console.log(updateItems)
            isEditing = false
            submitBtn.innerText = "Submit"
        } else {
            //create new item / addRow
            const newItems = {
                id: Date.now(),
                username: username,
                email: email,
                profession: profession,
                contact: contact,
                dob: dob,
                gender: gender
            }

            // new items got pushed
            console.log(newItems)
            items.push(newItems)
        }
    } else {
        alert("username & email & profession are Mandatory")
    }

    // existing items and new item get fetch and null the fields
    nullishData()
    getData(items)
});

//initial settings
init();
