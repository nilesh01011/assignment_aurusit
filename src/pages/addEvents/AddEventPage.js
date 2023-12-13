import React, { useState } from 'react';
import InputFields from '../../components/inputFields/InputFields';
import RadioButton from '../../components/radioButton/RadioButton';

function AddEventPage() {
  const [radioType, setRadioType] = useState('image');
  return (
    <div className="container">
      {/* header */}
      <div className="empty_space" />
      {/* main */}
      <main>
        <div className="main_Container formContainer">
          {/* title */}
          <h2>Add an Events</h2>

          {/* form contents */}
          <form>
            {/* InputFields */}
            <InputFields
              label="event name"
              inputType="text"
              placeholder="Name of the event"
            />
            <InputFields
              label="event date"
              inputType="date"
              placeholder="select event Date"
            />
            {/* radio button */}
            <div className="radioContainer">
              <RadioButton
                textSelect="image"
                radioType={radioType}
                setRadioType={setRadioType}
              />
              <RadioButton
                textSelect="video"
                radioType={radioType}
                setRadioType={setRadioType}
              />
            </div>
            {/* file uploads */}
            <div className='fileUploadsContainer'></div>
            {/* event url link */}
            <InputFields
              label="event web link"
              inputType="text"
              placeholder="Enter URL"
            />
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddEventPage;
