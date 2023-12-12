address = {
    street:"2nd Lane",
    city:"Embilipitiya",
    zipCode:"70200",
}

// factory function
function createAddress(street,city,zipCode){
    return{
        street,
        city,
        zipCode
    }
}

// constructor fuction
function Address(street,city,zipCode){
    this.street=street,
    this.city=city,
    this.zipCode=zipCode
}

console.log(new Address("A","B","689"))