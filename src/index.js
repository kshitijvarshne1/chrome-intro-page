import React from 'react';
import ReactDom from 'react-dom';

let curDate = new Date(2021,5,5,8);
curDate = curDate.getHours();
let greeting ="";
const cssGreeting={ };

if(curDate>=1 && curDate<12){
    greeting="Good Morning";
    cssGreeting.color='green';
}
else if(curDate>=12 && curDate<=19){
    greeting="Good AfterNoon";
    cssGreeting.color='red';

}
else{
    greeting="Good Night"
    cssGreeting.color='black';

}

ReactDom.render(
    <h1>Hello sir, <span style={cssGreeting}>{greeting}</span></h1>
    ,document.getElementById('root')
);
