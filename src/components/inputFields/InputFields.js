import React from 'react';
import './styles.scss';
import Label from '../label/Label';

function InputFields({
  label,
  inputType,
  placeholder,
  onChanged,
  value,
  error,
}) {

  return (
    <>
      <div
        className="inputType"
      >
        {/* label */}
        <Label label={label} />
        {/* input */}
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          // defaultValue={editEvent}
          onChange={(e) => onChanged(e.target.value)}
          style={{ borderColor: value === "" && error !== "" ? '#ED302D' : '#000' }}
        />

      {/* errors */}
      {value === "" && error !== "" && <span className='error'>{error}</span>}
      </div>

    </>
  );
}

export default InputFields;
