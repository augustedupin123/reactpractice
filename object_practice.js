

class practice{
    constructor(id, name, username, email, address, phone, website, company){
        var address = {
            "street" : "Kulas light",
            "suite" : "Apt 556",
            "city" : "gwenborough",
            "zipcode" : "92998-3874",
            "geo":{
                "lat" : "-37.3159",
                "lo" : "81.1496"
            }
        }
        this.id = id;
        var company = {
            "name" : "romaguera-crona",
            "catchPhrase" : "multi layered client server neural net",
            "bs" : "harness real time e-markets"
        }

    this.name = name;
    this.username = username;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.company = company;

    }
}
var data1 = new practice('1', "Leanne Graham", "Bret", "Sincere@april.biz", this.address, "1-770-736-8031 x56442", "hildegard.org", this.company);
console.log(data1);
