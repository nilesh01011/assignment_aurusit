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
  editEvent,
  name,
}) {
  // console.log(editEvent)

  // console.log(editEvent)
  const handleChanged = (e) => {
    const values = e.target.value;
    onChanged(values);
  };

  return (
    <>
      <div className="inputType">
        {/* label */}
        <Label label={label} />
        {/* input */}
        <input
          name={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          defaultValue={editEvent && editEvent}
          onChange={(e) => onChanged(e.target.value)}
          // onChange={handleChanged}
          style={{
            borderColor: value === '' && error !== '' ? '#ED302D' : '#000',
          }}
        />

        {/* errors */}
        {value === '' && error !== '' && <span className="error">{error}</span>}
      </div>
    </>
  );
}

export default InputFields;
