import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let greeting = '';
const cssStyle = {
  color: 'green'
};

let curDate = new Date(2020, 5, 5, 5);
curDate = curDate.getHours();
if(curDate >=1 && curDate <12){
  greeting = 'Good morning';
  cssStyle.color = 'green';
}else if (curDate>=12 && curDate<19){
  greeting = "Good Afternoon";
  cssStyle.color = 'orange';
}else {
  greeting = "Good Night";
  cssStyle.color = 'black';
}

ReactDOM.render(
  <>
    <div>
      <h1>Hello sir,<span style={cssStyle}>{greeting}</span></h1>
    </div>
  </>,
  document.getElementById("root")
  

);