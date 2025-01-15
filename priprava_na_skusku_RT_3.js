class Laptop{
    constructor(vyrobca, model, rocnik){
        this.vyrobca = vyrobca;
        this.model = model;
        this.rocnik = rocnik;
    }
}

class ExtLaptop extends Laptop{
    vypis(){
        return this.vyrobca + ',' + this.model + ',' + this.rocnik;
    }
}

var a = new ExtLaptop('HP', 'Omen', 2015);
console.log(a.vypis());