var wrong = "I’m the badger. ... I’m the one who knocks."
var fixed = wrong.replace('badger','danger');
var intense = fixed.replaceAll("I’m", "I am");
var intense = fixed.replace(/I'm/g,'I am');

var bool = RegEx.test(str);
/*
let regex = /hello/;
let str = "hello world";
let bool = regex.test(str);
console.log(bool); // Výstup: true
*/
var arr = RegEx.exec(str); // capture groups
/*
let regex = /(\d{4})-(\d{2})-(\d{2})/; // Formát dátumu: YYYY-MM-DD
let str = "Dátum: 2023-01-27";
let arr = regex.exec(str);

console.log(arr); // Výstup: ["2023-01-27", "2023", "01", "27"]
*/
var arr = str.split(delimiter);
/*
let str = "apple,banana,cherry";
let arr = str.split(",");
console.log(arr); // Výstup: ["apple", "banana", "cherry"]
*/
var index = str.search(RegEx);
/*
let regex = /world/;
let str = "hello world";
let index = str.search(regex);
console.log(index); // Výstup: 6 (index, kde začína "world")
*/
var arr = str.match(RegEx);
/*
let regex = /\d+/g; // Nájde všetky čísla !!!všetky
let str = "123 a 456 b 789";
let arr = str.match(regex);
console.log(arr); // Výstup: ["123", "456", "789"]
*/
var arr = str.matchAll(RegEx); // capture groups
/*
let regex = /(\d{4})-(\d{2})-(\d{2})/g;
let str = "Dátumy: 2023-01-27 a 2024-02-28";
let matches = str.matchAll(regex);

for (let match of matches) {
  console.log(match);
}
// Výstup:
// ["2023-01-27", "2023", "01", "27"]
// ["2024-02-28", "2024", "02", "28"]
*/