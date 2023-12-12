address = {
    street:"2nd Lane",
    city:"Embilipitiya",
    zipCode:"70200",
}

// factory function
function createAddress(address){
    return{
        ...address
    }
}

// constructor fuction
function Address(address){
    for(let key in address){
        this[key]=address[key]
    }
}

console.log(new Address(address))