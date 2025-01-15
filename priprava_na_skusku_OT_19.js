var library = [{"autor": "Ezop", "titul": "Vlk a zajac"}, {"autor": "Tolkien", "titul": "Hobit"}, {"autor": "Ezop", "titul":"Medved a vlk"}];

function mostProductive(library){
    var arr = [];

    for (const book in library){
        if (arr[book.autor]){
            arr[book.autor]+=1;
        }
        else{
            author = book.autor
            arr[arr.length] = {author: 1};
        }
    }
    console.log(arr);
    return arr;
}

mostProductive(library);
//priklad vystupu: [{"autor": "Ezop", "pocet": 2}, {"autor": "Tolkien", "pocet": 1}]