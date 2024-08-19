import { useState } from 'react'
import Styles from './App.module.css'
import ButtonsContainer from './Components/ButtonsContainer'
import Display from './Components/Display'

function App() {
  const [calVal, setcalVal] = useState("");
  const buttonEvent = (buttonText) => {
    if (buttonText === 'C') {
      setcalVal("");
    }
    else if (buttonText === '=') {
      const result = eval(calVal);
      setcalVal(result);
    }
    else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  }
  return (
    <div className={Styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={buttonEvent} />
    </div >
  )
}

export default App
