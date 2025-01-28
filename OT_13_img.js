var counter = 0;

function listener(){
    const button = document.getElementById("id");
    button.addEventListener("click", () => {
        counter +=1;
        window.location.href = link; //presmerovanie
        window.open(link, '_blank'); //otvorenie noveho okna
    })    
}

function addAd(img,link){
    setTimeout(() => {
        var image = document.createElement(img);
        image.src = link;
        image.id = "id";
        document.body.appendChild(image);
        listener();
    },3000)
}