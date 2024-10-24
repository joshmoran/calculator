import logo from './logo.svg';
import './App.css';
import React, { useState, setValue } from 'react';

function checkEmpty( stringEl ) {
  if (  stringEl != '' && stringEl != null && stringEl != 'undefined') {
    return stringEl.slice( 0, -1 ) ;
  } 
}

function checkValue ( currentVal, targetEl ) {
  if ( targetEl == '' || targetEl == null  ){
    return currentVal;
  } else { 
    return targetEl + currentVal;
  }
}

function elevaluateNum( number ) {
  if ( isNaN( number ) == false) {
    return number; 
  }
}

function calculate ( sum, target ) {
  let answer = elevaluateNum( sum );

  if( answer == 0 ) {
    return '0';
  } else if ( isNaN(answer) == false ) {
    return answer;
  } else {
    alert('Cannot re-enter the calculation, there was an error ');
    document.getElementsByClassName('output')[0].value = '';
  }

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
            <input type="text" className="output" value={value}  />
          </div>
          <div className="buttons">
          <div className="flex row row1">
              <input type="button" value="AC" onClick={e => setValue('')} />
              <input type="button" value="DE" onClick={ e => setValue( checkEmpty( value ) ) } />
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
              <input type="button" value="=" className="calculatBtn" onClick={e => setValue( calculate( String( value ), value ) )} />
            </div>
          </div>
    </div>
    </div>
  );
}

export default App;
