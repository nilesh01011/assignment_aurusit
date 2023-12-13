import React from 'react';
import './styles.scss';

function EventItems({
  name,
  date,
  fileType,
  attendees,
  fileSrc,
  link,
  description,
}) {
  const wordSlice = (word) => {
    if (word.length > 110) {
      return word.slice(0, 110) + '...';
    } else {
      return word;
    }
  };

  return (
    <div className="eventItems">
      {/* images */}
      <div className="images">
        <img src={fileSrc && fileSrc} alt={name} />
      </div>
      {/* contents */}
      <div className="contents">
        {/* name */}
        <h5>Event name : {name}</h5>
        {/* descriptions */}
        <p>{wordSlice(description)}</p>
        {/* actions button */}
        <div className="buttonContainer">
          {/* edit button */}
          <button type="button">Edit</button>
          {/* delete */}
          <button type="button">delete</button>
        </div>
      </div>
    </div>
  );
}

export default EventItems;
