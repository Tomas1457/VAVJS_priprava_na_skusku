//Intervals
/*
var ival = setInterval(function()..., timeInMs);
clearInterval(ival);
var itim = setTimeout(function()..., timeInMs);
clearTimeout(itim);
*/

//Arrays I.
var a = [1,2,3];
var a = Array(1,2,3);
var a = Array(3);

a.forEach(function(e){console.log(e);});
var l = a.length;
for(var i=0;i<l;i++) {console.log(a[i]);}

var a = [1,2,3,4,5];
a[6] = 7;
console.log(Object.keys(a));
console.log(a.length);
console.log(a);
a.length = 15;
console.log(a);

//Arrays II.
var a = [1,2,3,4,5];
var b = a;
a.pop();

console.log(b);
var b = a.slice();

//Arrays III.
/*
▶ array modifiyng operations
    ▶ .push(element/s) (push na koniec), .pop() (pop z konca),
     .unshift(element) (push na zaciatok), .shift() (pop zo zaciatku)
    ▶ .splice(position, count) (odstrani pocet prvkov z daneho indexu vratane)
    ▶ .reverse(), .sort((e1,e2) => e1-e2);
▶ operations returning new array
    ▶ .concat(array2...) (spoji polia)
    ▶ .filter(funciton(element){return element>7});
    ▶ ['H','e','l','l','o'].join('');
    ▶ [1,2,3,4,5].map(function(element){return element+1});
    ▶ .slice(start, end); (odstrani pocet prvkov z daneho indexu vratane)
*/
