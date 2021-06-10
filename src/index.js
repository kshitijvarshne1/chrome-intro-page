import React from 'react';
import ReactDom from 'react-dom';

let curDate = new Date(2021,5,5,20);
curDate = curDate.getHours();
let greeting ="";


if(curDate>=1 && curDate<12){
    greeting="Good Morning";
}
else if(curDate>=12 && curDate<=19){
    greeting="Good AfterNoon";
}
else{
    greeting="Good Night"
}

ReactDom.render(
    <h1>Hello sir, {greeting}</h1>
    ,document.getElementById('root')
);
