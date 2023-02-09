// let headingEl = document.createElement('h1')
// headingEl.textContent="Hello world"
// headingEl.classList.add('heading')  // add classlist
// document.body.appendChild(headingEl)

// let buttonElemt = document.createElement('button')
// buttonElemt.textContent='Change Heading'
// document.body.appendChild(buttonElemt)
// function handleChangeHeading(){
//     headingEl.textContent="Hello Students"
//     headingEl.classList.remove('heading')
//     headingEl.style.color='green'
// }
// buttonElemt.addEventListener('click',handleChangeHeading)

// console.log(buttonElemt)


let nameEl = document.getElementById('name')
let mobileEl = document.getElementById('mobile')
let dobEl = document.getElementById('dob')
let buttonEl = document.getElementById('button')

let formMetaData =[]
function onSubmittimgForm(){
    formMetaData.push(nameEl.value)
    formMetaData.push(dobEl.value)
    formMetaData.push(mobileEl.value)
    // ajax call
    console.log(formMetaData)
}

buttonEl.addEventListener('click',onSubmittimgForm)

