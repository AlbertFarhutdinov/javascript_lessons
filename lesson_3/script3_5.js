'use strict';
document.write('<h3>Пункт 5 - в консоли</h3>');
console.log('Пункт 5:');
var string='';
for (var row=1; row<=20; row++){
    string += 'x';
    console.log(string);
}