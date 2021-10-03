import Button from './components/Button'
import Input from './components/Input'
import React, { useState, useEffect } from 'react';
import Darkmode from './components/Darkmode'

import './App.css'
function App() {


  // state of entered value and result
  const [val, setVal] = useState(0);

  // No allow to add number after '='
  var status__number = false;
  var last_char = val[val.length - 1];
  try { if (val.toString().includes('=')) status__number = true } catch (err) { }

  // var new_val = val;
  if (last_char === '/' || last_char === '*' || last_char === '-' || last_char === '+' || last_char === '=') {
    last_char = true;

  } else {
    last_char = false;
  }

  // numbers click function
  function ButtonClk(e) {
    return (
      // checking placeholder of first impression (0)
      // checking (=) for disallow adding number or operator
      val === 0 ? setVal(e.target.innerText) : status__number ? setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val + "" + e.target.innerText)
    )
  }

  // operators click function
  function Operation(e) {
    return (
      !last_char ? !status__number ? setVal(val + "" + e.target.innerText) : setVal(val.toString().replace(val.slice(val.indexOf('='),), "" + e.target.innerText)) : setVal(val.slice(0, -1) + e.target.innerText)
    )
  }

  // enter (=) click function
  function Enter(e) {
    var result;
    var status = false;
    try { if (val.length) { result = eval(val); status = true } } catch (ex) { }

    return (
      status ? !last_char ? setVal(val + "" + e.target.innerText + result) : setVal(0) : setVal(0)
    )

  }

  /* eslint no-eval: 0 */
  function Clear() {
    setVal(0)
  }

  // backspace function 
  function BackCR() {
    // try { setVal(val[val.indexOf('='), -1]) } catch (err) { console.log(err) }
    // try {
    //   if (val.toString().includes('=')) { setVal(val.slice(val.indexOf('='),)) }
    //   else {

    if (val.length > 1) { setVal(val.slice(0, -1)) } else { setVal(0) }
    //   }
    // } catch (err) { }
    // // console.log(val.toString())
  }


  // const [count, setCount] = useState(0);
  useEffect(() => {
    document.getElementById("display").focus();
  });
  // function handlefocus(e) {
  //   e.focus();
  // }
  return (
    // <div className="Calc">
    //   <div className="Calculator">
    //     <Input value={val} /><br />
    //     <div className="Operations">
    //       <div className="topOperators">
    //         <Button onClick={BackCR}>Back</Button>
    //         <Button onClick={Clear}>Clear</Button>
    //         <Button className="buttons__si" onClick={Operation}>/</Button>
    //         <Button className="buttons__si" onClick={Operation}>*</Button>
    //       </div>
    //       <div className="groupNum">
    //         <div className="numberBtns">
    //           <Button onClick={ButtonClk}>1</Button>
    //           <Button onClick={ButtonClk}>2</Button>
    //           <Button onClick={ButtonClk}>3</Button>
    //           <Button onClick={ButtonClk}>4</Button>
    //           <Button onClick={ButtonClk}>5</Button>
    //           <Button onClick={ButtonClk}>6</Button>
    //           <Button onClick={ButtonClk}>7</Button>
    //           <Button onClick={ButtonClk}>8</Button>
    //           <Button onClick={ButtonClk}>9</Button>
    //         </div>
    //         <div className="operators">
    //           <Button className="buttons__si" onClick={Operation}>-</Button>
    //           <Button className="buttons__si" onClick={Operation}>+</Button>
    //           <Button onClick={Enter} cls="equals">=</Button>
    //         </div>
    //       </div>
    //       <div className="bottomOP">
    //         <Button onClick={ButtonClk} cls="zero">0</Button>
    //         <Button onClick={ButtonClk}>.</Button>
    //       </div>
    //     </div>
    //   </div>
    // </div>







    // <div className="Calc">
    < div className="Calculator" >
      <Darkmode />
      <div className="padd__box"><Input value={val} /></div>
      <div className="Operations">

        <div className="parent">
          <Button onClick={BackCR} cls="cls">←</Button>
          <Button onClick={Clear} cls="cls">C</Button>
          <Button cls="buttons__si" onClick={Operation}>/</Button>
          <Button cls="buttons__si" onClick={Operation}>*</Button>
        </div>


        <div className="parent">
          <Button onClick={ButtonClk}>7</Button>
          <Button onClick={ButtonClk}>8</Button>
          <Button onClick={ButtonClk}>9</Button>
          <Button cls="buttons__si" onClick={Operation}>-</Button>

        </div >


        <div className="parent">
          <Button onClick={ButtonClk}>4</Button>
          <Button onClick={ButtonClk}>5</Button>
          <Button onClick={ButtonClk}>6</Button>
          <Button cls="buttons__si" onClick={Operation}>+</Button>
        </div >

        <div className="parent">
          <Button onClick={ButtonClk}>1</Button>
          <Button onClick={ButtonClk}>2</Button>
          <Button onClick={ButtonClk}>3</Button>
          <Button onClick={Enter} cls="buttons__si equals">=</Button>
        </div>
        <div className="parent last__pa">
          <Button onClick={ButtonClk} cls="dot" >0</Button>
          <Button onClick={ButtonClk}>.</Button>
          <Button onClick={Enter}>=</Button>

        </div>
        {/* <Button onClick={Enter}>=</Button> */}
        {/* <Button>X</Button>
          <Button>X</Button> */}
      </div>
    </div >
    // </div>




  );
}

export default App;
