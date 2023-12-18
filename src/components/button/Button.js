import React from 'react';
import "./styles.scss"

function Button({ btnType, btnText,btnSize,onClick }) {
  return (
    <button type={btnType} className={`buttons ${btnSize}`} onClick={onClick}>
      {btnText}
    </button>
  );
}

export default Button;
