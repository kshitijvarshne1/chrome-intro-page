import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

let curDate = new Date().getHours();
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
    <>
        <div>
            <h1>Hello sir, <span style={cssGreeting}>{greeting}</span></h1>
        </div>
    </>
    ,document.getElementById('root')
);
