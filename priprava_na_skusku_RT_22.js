var arr = [
    ["a","1"],
    ["b", "2"],
    ];

function a2o(arr){
    var o = {};
    for (let pole of arr){
        o[pole[0]]=pole[1];
    }
    console.log(o);
    return o;
}

var ret = a2o(arr);
    // ret = { "a": "1", "b": "2", ... }