function pr(){
    return new Promise((resolve,reject)=> setTimeout(()=>{resolve("promise resolvnuty")},2000))
}

async function fun(){ 
    pr().then((data)=> console.log(data))
}

fun();