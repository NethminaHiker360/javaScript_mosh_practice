let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

// constructor fuction
function Address(street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode
}

//check objects properties are same
function areEqual(address1, address2) {
    for (let key in address1) {
        if (address1[key] !== address2[key]) {
            return false
        }
    }
    return true
}

// check objects reference are same
function areSame(address1, address2) {
    return address1 === address2 ? true : false
}

console.log(areEqual(address1, address2))