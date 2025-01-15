function sum1(arr){
    var a = 0;
    for (num of arr){
        if (num % 2 != 0){
            a += num;
        }
    }
    console.log(a);
    return a;
}
var a = sum1([1,2,3,4]); // a == 4;