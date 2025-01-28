function mostProductive(library){
    let productive = [];
    var newauthor;

    library.map((element) => {
        newauthor = 1;
        productive.map((info) => {
            if (info.autor == element.autor){
                info.pocet++;
                newauthor = 0;
            }
        })
        if (newauthor){
            productive[productive.length] = {"autor": element.autor, "pocet": 1};
        }
    })
    console.log(productive);
    return productive;
}

var library = [{"autor": "Ezop", "titul": "Vlk a zajac"}, {"autor": "Tolkien", "titul": "Hobit"}, {"autor": "Ezop", "titul":"Medved a vlk"}];
mostProductive(library);
//priklad vystupu: [{"autor": "Ezop", "pocet": 2}, {"autor": "Tolkien", "pocet": 1}]