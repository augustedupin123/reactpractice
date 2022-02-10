// create a user object, along with all the keys, print the object.

var user = {
    name: "valery",
    age: 30,
    gender: "M",
    hobbies: ["coding", "reading"],
    swimming: false,
    address: {
        city: "Montreal",
        pincode: "560091",
    }
}

for(k in user) {
    console.log(typeof(user[k]))
    if(typeof(k) != 'object') {
        console.log(k + "-" + user[k]);
    }
}
for (k in user) {
    if (k != "address") {
        console.log(k + "-" + user[k]);
    } else {
        for (ak in user.address) {
            console.log(ak + "-" + user.address[ak]);
        }
    }
    
}
console.log(Object.keys(user));

var ok = Object.keys(user);
for (var i = 0; i<ok.length; i++) {
    console.log(user[ok[i]]);
}




