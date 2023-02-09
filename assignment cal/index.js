let input1 = document.getElementById("first")
let input2 = document.getElementById("secound")

let plusEl = document.getElementById("plus")
let minusEl = document.getElementById("minus")
let mulEl = document.getElementById("mul")
let divEl = document.getElementById("div")


function handlePlus(){
    console.log(parseInt(input1.value)+parseInt(input2.value))
}
function handleMinus(){
    console.log(parseInt(input1.value)-parseInt(input2.value))

}
function handlemul(){
    console.log(parseInt(input1.value)*parseInt(input2.value))

}
function handlediv(){
    console.log(parseInt(input1.value)/parseInt(input2.value))

}


plusEl.addEventListener('click',handlePlus)
minusEl.addEventListener('click',handleMinus)
mulEl.addEventListener('click',handlemul)
divEl.addEventListener('click',handlediv)






