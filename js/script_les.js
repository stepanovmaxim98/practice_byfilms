"use strict";

if (1){
    console.log('Ok!');
} else{
    console.log('error');
}


// if (num < 49){
//     console.log('Error')
// } else if (num > 100){
//     console.log('Много');
// } else {
//     console.log('ОК!');
// }

// (num === 50) ? console.log('ok') : console.log('eror');

const num = 50;
switch( num ){
    case 49:
        console.log('Неверно');
        break;
    case 100: 
        console.log('Неверно');
        break;
    case 51:
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз!');
        break;
}