import React from 'react';
import "./styles.scss"

function InputFields({label,inputType,placeholder}) {
  return (
    <div className='inputType'>
        {/* label */}
        <label>{label}</label>
        {/* input */}
        <input type={inputType} placeholder={placeholder} />
    </div>
  )
}

export default InputFields