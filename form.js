const studentForm = document.querySelector('form');


const INITIAL_STUDENT_DATA = [{
        name: "Jonas",
        surname: "Jonaitis",
        age: 20,
        phone: "+37045345345",
        email: "vardas@gmail.com",
        itKnowledge: 4,
        group: "type10",
        interest: ["javaScript, c++"]

    },
    {
        name: "Giedrius",
        surname: "Giedraitis",
        age: 25,
        phone: "+37045345345",
        email: "vardas@gmail.com",
        itKnowledge: 4,
        group: "type10",
        interest: ["javaScript, c++"]

    },
    {
        name: "Aleksas",
        surname: "Aleksaitis",
        age: 30,
        phone: "+37045345345",
        email: "vardas@gmail.com",
        itKnowledge: 4,
        group: "type10",
        interest: ["javaScript, Python"]

    },
    {
        name: "Romanas",
        surname: "Romanaitis",
        age: 35,
        phone: "+37045345345",
        email: "vardas@gmail.com",
        itKnowledge: 4,
        group: "type10",
        interest: ["javaScript, PHP"]

    },
    {
        name: "Vilte",
        surname: "Viltelaite",
        age: 120,
        phone: "+37045345345",
        email: "vardas@gmail.com",
        itKnowledge: 4,
        group: "type10",
        interest: ["javaScript, PHP"]

    }
]
let studentName = document.querySelector('#student-name').value;

let addStudent = document.querySelector("#add-student")


function renderInitalData(students) {


    students.forEach((item) => {

        const ul = document.querySelector("#add-student")
        const li = document.createElement("li")
        li.classList.add("student-li-element")
        li.innerHTML = `<strong>Vardas:</strong> ${item.name} <strong>Pavarde:</strong> ${item.surname} <strong>Age : </strong>  ${item.age} <strong>Phone</strong> ${item.phone} <strong>Email :</strong> ${item.email} <strong>It Knowdlege : </strong> ${item.itKnowledge} <strong>Group:</strong>${item.group} <strong>interest:</strong> ${item.interest} `
        ul.appendChild(li)
    })


}
renderInitalData(INITIAL_STUDENT_DATA)






const itKnowledgeInputElement = document.querySelector('#student-it-knowledge');
const itKnowledgeOutputElement = document.querySelector('#it-knowledge-output');

itKnowledgeInputElement.addEventListener('input', (event) => {
    itKnowledgeOutputElement.textContent = event.target.value;
});
studentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let studentName = document.querySelector('#student-name').value;
    let studentSurname = document.getElementById('student-surname').value;
    // let studentAge = studentForm.querySelector('#student-age').value;
    let studentAge = event.target.querySelector('#student-age').value;
    let studentPhone = studentForm.querySelector('[name="phone"]').value;
    let studentEmail = event.target.elements.email.value;
    let studentItKnowledge = event.target.elements['it-knowledge'].value;
    // let studentGroup = document.querySelector('input[name="group"]:checked');
    let studentGroup = event.target.elements.group.value;
    let interests = document.querySelectorAll('input[name="interest"]:checked');

    document.querySelectorAll('.input-error-message').forEach(input => input.remove());






    let requiredInputs = document.querySelectorAll('input.required');
    let validForm = true;
    requiredInputs.forEach(input => {


        input.classList.remove('input-error');
        if (!input.value) {
            validForm = false;
            let alertText = 'Ne visi laukeliai užpildyti.';
            alertMessage(alertText, 'error-alert');
            input.classList.add('input-error');



            let inputError = document.createElement('span');
            inputError.textContent = 'Šis laukelis yra privalomas';
            inputError.classList.add('input-error-message');




            input.after(inputError);
            return
        }
        if (input.name === "name" && input.value.length < 3) {
            validForm = false;
            let alertText = 'Ne visi laukeliai užpildyti.';
            alertMessage(alertText, 'error-alert');
            input.classList.add('input-error');



            let inputError = document.createElement('span');
            inputError.textContent = 'Vardas privalo buti  bent 3 simboliu';
            inputError.classList.add('input-error-message');





            input.after(inputError);
            return


        }
        if (input.name === "surname" && input.value.length < 3) {
            validForm = false;
            let alertText = 'Ne visi laukeliai užpildyti.';
            alertMessage(alertText, 'error-alert');
            input.classList.add('input-error');



            let inputError = document.createElement('span');
            inputError.textContent = 'pavarde privalo buti  bent 3 simboliu';
            inputError.classList.add('input-error-message');

            input.after(inputError);
            return


        }
        if (input.name === "age") {
            if (input.value < 0) {
                validForm = false;
                let alertText = 'Ne visi laukeliai užpildyti.';
                alertMessage(alertText, 'error-alert');
                input.classList.add('input-error');



                let inputError = document.createElement('span');
                inputError.textContent = 'pavarde privalo buti  bent 3 simboliu';
                inputError.classList.add('input-error-message');


                input.after(inputError);
                return

            }
        }
        if (input.name === "phone") {
            if (input.value.length < 9 || input.value.length > 12) {
                validForm = false;
                let alertText = 'Ne visi laukeliai užpildyti.';
                alertMessage(alertText, 'error-alert');
                input.classList.add('input-error');



                let inputError = document.createElement('span');
                inputError.textContent = 'ivestas telefono numeris nera teisingas';
                inputError.classList.add('input-error-message');




                input.after(inputError);
                return
            }
        }
        if (input.name === "email") {
            if (!input.value.includes("@") || input.value.length < 5) {
                validForm = false;
                let alertText = 'Ne visi laukeliai užpildyti.';
                alertMessage(alertText, 'error-alert');
                input.classList.add('input-error');



                let inputError = document.createElement('span');
                inputError.textContent = '';
                inputError.classList.add('input-error-message');




                input.after(inputError);
                return
            }
        }




    })


    if (!validForm) {
        return;
    }
    let studentsList = document.querySelector('#students-list');
    let studentItem = document.createElement('div');
    studentItem.classList.add('student-item');
    let nameElement = document.createElement('p');
    nameElement.innerHTML = `<strong>Name:</strong> ${studentName}`;
    let surnameElement = document.createElement('p');
    surnameElement.innerHTML = `<strong>Surname:</strong> ${studentSurname}`;
    let ageElement = document.createElement('p');
    ageElement.innerHTML = `<strong>Age:</strong> ${studentAge}`;
    let phoneElement = document.createElement('p');
    // phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
    phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
    let emailElement = document.createElement('p');
    // emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
    emailElement.innerHTML = `<strong>Email:</strong> ****`;
    let itKnowledgeElement = document.createElement('p');
    itKnowledgeElement.innerHTML = `<strong>IT Knowledge:</strong> ${studentItKnowledge}`;
    let groupElement = document.createElement('p');
    groupElement.innerHTML = `<strong>Group:</strong> ${studentGroup}`;
    let interestWrapperElement = document.createElement('div');
    interestWrapperElement.classList.add('interest-wrapper');
    let interestTitleElement = document.createElement('h4');
    interestTitleElement.classList.add('interest-title');
    interestTitleElement.textContent = 'Interests:';
    let interestListElement = document.createElement('ul');
    interestListElement.classList.add('interest-list');
    interests.forEach(interest => {
        let interestItemElement = document.createElement('li');
        interestItemElement.textContent = interest.value;
        interestListElement.append(interestItemElement);
    });
    interestWrapperElement.append(interestTitleElement, interestListElement);
    let privateInfoButton = document.createElement('button');
    privateInfoButton.classList.add("private-button")
    privateInfoButton.textContent = 'Rodyti asmens duomenis';

    privateInfoButton.addEventListener('click', () => {
        if (!privateInfoButton.classList.contains('hide')) {
            phoneElement.innerHTML = `<strong>Phone:</strong> ${studentPhone}`;
            emailElement.innerHTML = `<strong>Email:</strong> ${studentEmail}`;
            privateInfoButton.textContent = 'Slėpti asmens duomenis';
        } else {
            phoneElement.innerHTML = `<strong>Phone:</strong> ****`;
            emailElement.innerHTML = `<strong>Email:</strong> ****`;
            privateInfoButton.textContent = 'Rodyti asmens duomenis';
        }
        privateInfoButton.classList.toggle('hide');
    });
    let deleteStudentButton = document.createElement('button');
    deleteStudentButton.classList.add("delete-button")
    deleteStudentButton.textContent = 'Remove student';
    deleteStudentButton.addEventListener('click', () => {
        studentItem.remove();
        let messageText = `Student deleted (${studentName} ${studentSurname})`;
        alertMessage(messageText);
    })
    studentItem.append(nameElement, surnameElement, ageElement, phoneElement, emailElement, itKnowledgeElement, groupElement, interestWrapperElement, privateInfoButton, deleteStudentButton);
    studentsList.prepend(studentItem);
    // studentForm.reset();
    event.target.reset();
    let alertText = `Student created (${studentName} ${studentSurname})`;
    alertMessage(alertText);
});

function alertMessage(text, elementClass = '') {
    const alertElement = document.querySelector('#alert');
    alertElement.textContent = text;
    if (elementClass) {
        alertElement.classList.add(elementClass);
    }
    setTimeout(() => {
        alertElement.textContent = '';
        if (elementClass) {
            alertElement.classList.remove(elementClass);
        }
    }, 5000);
}

function inputErrorMessage(errorMessage) {

    let alertText = 'Ne visi laukeliai užpildyti.';
    alertMessage(alertText, 'error-alert');
    input.classList.add('input-error');



    let inputError = document.createElement('span');
    inputError.textContent = errorMessage;
    inputError.classList.add('input-error-message');

    input.after(inputError);

}