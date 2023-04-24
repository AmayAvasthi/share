const products = [];

class Product{

    constructor(first_name, last_name, phone_number, address, city, state, zip, description, upload){
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_number = phone_number;
        this.address = address; 
        this.city = city; 
        this.state = state; 
        this.zip = zip;
        this.description = description;
        this.upload = upload;
    }
    save(){
        products.push(this);
    }

    static findAll(){
        return products;
    }
}

module.exports = Product;