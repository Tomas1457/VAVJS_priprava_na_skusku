var str = "a,b;c.d,e;f.g,h;i.j,k;l"; // pismena su oddelene ",", ";" a ".", vzdy v tomto poradi
var arr = conv(str);
// arr = ["l","k","j", "i", "h", "g", "f", "e", "d", "c", "b", "a"]

function conv(str){
    let arr =[];
    for (var i=str.length-1; i>=0; i-=1){
        if (str[i] != ';' && str[i] != ',' && str[i] != '.')
            arr.push(str[i]);
    }
    return arr;
}
arr = conv(str);