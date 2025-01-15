function rWords(str){
    var num = 0;
    if (str[0] == "s"){
        num += 1;
    }

    for (var i=0; i<str.length;i+=1){
        char = str[i];
        if (char == " "){
            if (str[i+1] == "s"){
                num += 1;
            }
        }
    }
    console.log(num);
    return num;
}
var a = rWords('raketa strom ryba chlieb'); // a == 1