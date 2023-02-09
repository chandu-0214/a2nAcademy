let inputEl = document.getElementById('input')

function handleInput(event){
    if(event.key=="Enter"){
        console.log(inputEl.value)
    }
}

inputEl.addEventListener("keydown",handleInput)



