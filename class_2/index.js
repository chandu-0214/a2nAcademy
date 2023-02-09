let buttonEl = document.getElementById("save")
let textareaEl = document.getElementById("inputTag")
let deleteButton = document.getElementById("delete")



let getStoredvalue = localStorage.getItem('notes')
if(getStoredvalue==null){
    textareaEl.value=""
}
else{
    let paredStoredValue=JSON.parse(getStoredvalue)
    textareaEl.value= paredStoredValue
}

function handleSave(){
    let storedvalue = textareaEl.value
    if(storedvalue==""){
        alert("Please write a story before click on save button")
    }
    let stingifyStoredValue = JSON.stringify(storedvalue)
    console.log(stingifyStoredValue)
    localStorage.setItem("notes",stingifyStoredValue)
}

function handleDelete(){
    localStorage.removeItem("notes")
    textareaEl.value=""
}

buttonEl.addEventListener('click',handleSave)
deleteButton.addEventListener("click",handleDelete)