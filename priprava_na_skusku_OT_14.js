function straeiou(str){
    var num = 0;
    const samohlasky = ["a", "e", "i", "y", "o", "u"];
    for (var char of str){
        for (var samohlaska of samohlasky)
            if (char == samohlaska){
                num += 1;
                break;
            }
    }
    console.log(num);
    return num;
}
straeiou('retazec'); // 3