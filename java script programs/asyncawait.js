// Async & await 
console.log("A")
console.log("B")
console.log("C")

console.log("Start")
setTimeout(()=>{
    console.log("Async task completed")
},1000)
console.log("End")

// promise -- 3 states (pending, resolve / reject)

const promise = new Promise((resolve,reject)=>{
    let sucess = true;
    if(sucess){
        resolve("operation successfull")
    }
    else{
        reject("operation failed")
    }
})

promise.then(result =>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})
.finally(element =>{
    console.log("always executed")
})

function fetchuser(){
    return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("user data fetched successfully")
            },2000)
    })
}
fetchuser()
.then(data =>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// Async Function ---> it returns promise.

async function Greet(){
    return Promise.resolve("welcome to utkarshaa academy with promise")
}

Greet()
    .then(result =>{
        console.log(result)
    })
    .catch(error =>{
        console.log(error)
    })

// await keyword pauses the execution until a promise is resolved.
function getData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
           resolve("Data Fetched")
        },5000)
    })
}    

async function displayData() {
        const result = await getData()    
        console.log(result)
        console.log("Hello")
        console.log("Data Received")
}

displayData();
