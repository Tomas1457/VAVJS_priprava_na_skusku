
function addAd(img,link){
    setTimeout (() => {
        var a = document.createElement("img");
        a.src = link;
        document.body.appendChild(img);
    },3000);
}

addAd('https://www.example.com/dog.jpg','https://www.example.com/about/dogs');