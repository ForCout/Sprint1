var re = /o/gi;
var str1 = 'Tinc un cotxe de color verd';
var str2 = str1.replace('verd', 'blau');
console.log(str2);
var str3 = str2.replace(re, 'u');
console.log(str3)