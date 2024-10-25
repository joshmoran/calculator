import logo from './logo.svg';
import './App.css';
import React, { useState, setValue } from 'react';

let calc;

let currentCalc = '';

function checkEmpty( stringEl ) {
  let toString = String( stringEl );
  // currentCalc = stringEl;
  // alert ( currentCalc + ' - ' + stringEl) ;
  // alert(currentCalc);
  // alert(typeof currentCalc); // Mumner, undefined 
  // alert( isNaN( currentCalc) ); // False, true

  // if ( currentCalc != 'undefined' || currentCalc  == false  ) {
    if (  toString != '' && toString != null || toString != 'undefined') {
      try { 
        return stringEl.slice(0, -1 ) ;
      } catch ( e ) {
        document.getElementsByClassName('output')[0].value = currentCalc;
        return;
      }
    } else {
      return currentCalc;
    }
  // } else {
  //   currentCalc = 
  //   document.getElementsByClassName('output')[0].value = currentCalc;
  //   return;
  // }
   
  // 
}

function checkValue ( currentVal, targetEl ) {
  // currentCalc += String( targetEl );
  // alert( currentVal + ' - ' + targetEl + ' - ' + currentCalc );
  // if ( typeof currentCalc != 'number' ) {
    if ( targetEl == '' || targetEl == null ) {
      if ( currentCalc == 0 && currentCalc > 0 ){ 
        return  currentVal;
      } else {
        return currentCalc +currentVal;
      }
    } else { 
      return targetEl + currentVal;
    }
  // }
}
function calculate ( sum ) {  
  document.getElementsByClassName('oldOutput')[0].innerHTML = sum ;

  try {
    sum = eval(sum);
  } catch ( e ) {
    return;
  }

  if (  typeof sum !== 'number') {
    alert('Cannot re-enter the calculation, there was an error ');
    document.getElementsByClassName('output')[0].value = '';
    return;
  } else if ( eval(sum) === 0 ){
    return '0';
  }

  currentCalc = eval(sum);
  document.getElementsByClassName('oldOutput')[0].innerHTML += ' = ' + sum;
  return eval( sum ) ;
  // let answer = elevaluateNum( sum );
  
  // let calc = Number( eval( sum ) );

  // alert( calc );
  
  // if ( isNaN(calc) ){
    
  // } else if ( calc == 0 ) {
  //   return '0';
  // } else if ( isNaN(calc) == false ) {
  //   return calc ;
  // } else {

  // }
  // else if (  ) {
  //   alert('the fuck');
    
  // }
  
}

function App() {
  const [value, setValue ] = useState('');

  return (  
    <div className="App">
      <div className="calculator">
          <div className="display">
            <h1>Previous Calculation: <span className="oldOutput">N/A</span></h1>
            <input type="text" className="output" value={value}  />
          </div>
          <div className="buttons">
          <div className="flex row row1">
              <input type="button" value="AC" onClick={e => setValue('')} />
              <input type="button" value="DE" onClick={ e => setValue( checkEmpty( value  ) ) } />
              <input type="button" value="." onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="/" onClick={e => setValue( checkValue ( e.target.value, value ) )} />    
            </div>
            <div className="flex row row2">
              <input type="button" value="7" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="8" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="9" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="*" onClick={e => setValue( checkValue ( e.target.value, value ))} />    
            </div>
            <div className="flex row row3">
              <input type="button" value="4" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="5" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="6" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="+" onClick={e => setValue( checkValue ( e.target.value, value ) )} />    
            </div>
            <div className="flex row row5">
              <input type="button" value="1" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="2" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="3" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="-" onClick={e => setValue( checkValue ( e.target.value, value ) )} />    
            </div>
            <div className="flex row row6">
              <input type="button" value="00" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="0" onClick={e => setValue( checkValue ( e.target.value, value ) )} />
              <input type="button" value="=" className="calculatBtn" onClick={e => setValue( calculate( value ) )} />
            </div>
          </div>
    </div>
    </div>
  );
}

export default App;
