// get 

function displaydata(modifiedData){
   let complstedData=  modifiedData.filter((eachObject=>{
        let {title,completed}=eachObject
        return completed==true
    }))
    console.log(complstedData)

}

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(data=>displaydata(data.slice(0,20)))
.catch(e=>console.log(e))







