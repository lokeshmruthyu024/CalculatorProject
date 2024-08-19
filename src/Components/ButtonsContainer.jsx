import React from 'react'
import Styles from '../Components/ButtonsContainer.module.css'
const ButtonsContainer = ({ onButtonClick }) => {

  const buttons = ["C", 1, 2, "+", 3, 4, "-", 5, 6, "*", 7, 8, "/", "=", 9, 0, "."]
  return (
    <div className={Styles.buttonsContainer}>
      {
        buttons.map(buttonname =>
          <button onClick={() => onButtonClick(buttonname)} className={Styles.button}>{buttonname}</button>)
      }
    </div>
  )
}

export default ButtonsContainer
