import React from 'react';
import './styles.scss';

function RadioButton({ textSelect, setRadioType, radioType }) {
  return (
    <div className="radioButton" onClick={() => setRadioType(textSelect)}>
      <p>
        <span style={{backgroundColor:radioType === textSelect && "#000"}}></span>
      </p>
      {textSelect}
    </div>
  );
}

export default RadioButton;
