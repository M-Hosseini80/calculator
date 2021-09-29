import Button from './components/Button'
import Input from './components/Input'
import React, { useState } from 'react';
import './App.css'
// import { Children } from 'react';
// import reactDom from 'react-dom';
function App() {
  const [val, setVal] = useState(0);
  // var result = false;

  var last_char = val[val.length - 1];
  // var new_val = val;
  if (last_char === '/' || last_char === '*' || last_char === '-' || last_char === '+' || last_char === '=') {
    last_char = true;
    // new_val = val.slice(0, -1) + e.target.innerText
  } else {
    last_char = false;
  }
  function ButtonClk(e) {

    return (

      val === 0 ? setVal(e.target.innerText) : setVal(val + "" + e.target.innerText)
      // console.log(val[val.length - 1])
      // console.log(e.target.innerText + val)
      // document.querySelector('.buttons__si').target.disabled = true
      // reactDom.findDOMNode('.buttons button').e.target.disabled = false
      // console.log(document.querySelector('.buttons__si'))
    )

  }

  function Operation(e) {

    return (
      !last_char ? setVal(val + "" + e.target.innerText) : setVal(val.slice(0, -1) + e.target.innerText)

      // console.log(e.target.innerText + val)
      // e.target.disabled = 'true'
    )
  }

  function Enter(e) {
    // var last_char = val[val.length - 1];
    // if (last_char === '=') {
    //   last_char = true;
    //   // new_val = val.slice(0, -1) + e.target.innerText
    // } else {
    //   last_char = false;
    // }

    // var total = new_val.match(/[+\-]*(\.\d+|\d+(\.\d+)?)/g) || [];
    // while (new_val.length) {
    //   total += parseFloat(new_val.shift());
    // }
    // function Total(fn) {
    //   return new Function('return ' + fn)();
    // }
    // console.log(total)

    // function addbits(sumTotal) {
    //   var total = 0,
    //     sumTotalVal = sumTotal.match(/[+-]*(\.\d+|\d+(\.\d+)?)/g) || [];

    //   while (sumTotalVal.length) {
    //     total += parseFloat(sumTotalVal.shift());
    //   }
    //   return total;
    // }


    // function evil(fn) {
    //   return (new Function('return ' + fn)());
    // }

    // var string = '1+23+4+5-30';
    // console.log(
    //   addbits(string)
    // )



    // var Vtotal = val.replace(/[^-()\d/*+.]/g, '');
    // total.parse();
    // total = total.evaluate();
    // console.log(Vtotal)
    var result;
    var status = false;
    try {
      if (val.length) { result = eval(val); status = true }

    }
    catch (ex) {
      console.log(ex)
    }
    // finally {
    //   result = setVal(0)
    // }

    return (

      status ? !last_char ? setVal(val + "" + e.target.innerText + result) : setVal(0) : setVal(0)
      // !result ? !last_char ? setVal(val + "" + e.target.innerText + eval(val)) : setVal(0) : setVal(0),
      // last_char ?? result === true
      // console.log(e)
      // e.target.disabled = 'true'
    )

  }
  /* eslint no-eval: 0 */
  function Clear() {
    setVal(0)
  }
  return (
    <div className="Calculator">
      <Input value={val} /><br />

      <Button onClick={Clear}>Clear</Button>
      <Button onClick={ButtonClk}>0</Button>
      <Button onClick={ButtonClk}>.</Button>
      <Button onClick={ButtonClk}>1</Button>
      <Button onClick={ButtonClk}>2</Button>
      <Button onClick={ButtonClk}>3</Button>
      <Button onClick={ButtonClk}>4</Button>
      <Button onClick={ButtonClk}>5</Button>
      <Button onClick={ButtonClk}>6</Button>
      <Button onClick={ButtonClk}>7</Button>
      <Button onClick={ButtonClk}>8</Button>
      <Button onClick={ButtonClk}>9</Button>
      {/* <div className="buttons"> */}
      <Button className="buttons__si" onClick={Operation}>/</Button>
      <Button className="buttons__si" onClick={Operation}>*</Button>
      <Button className="buttons__si" onClick={Operation}>-</Button>
      <Button className="buttons__si" onClick={Operation}>+</Button>
      {/* </div> */}
      <Button onClick={Enter}>=</Button>

    </div>
  );
}

export default App;
