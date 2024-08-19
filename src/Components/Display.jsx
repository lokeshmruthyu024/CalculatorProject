import Styles from './Display.module.css'
import React from 'react';

const Display = ({ displayValue }) => {
  return (
    <div>
      <input type="text" className={Styles.display} value={displayValue} readOnly />
    </div>
  )
}

export default Display
