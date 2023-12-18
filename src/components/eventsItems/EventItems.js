import React from 'react';
import './styles.scss';
import { useDispatch } from 'react-redux';
import { deleteEventItems } from '../../redux/slices/addEventItemsSlice';
import { useNavigate } from 'react-router-dom';

function EventItems({
  id,
  name,
  date,
  fileType,
  attendees,
  fileSrc,
  link,
  description,
}) {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // word slice
  const wordSlice = (word) => {
    if (word.length > 110) {
      return word.slice(0, 110) + '...';
    } else {
      return word;
    }
  };

  const dummyDescription =
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";

  // delete from store
  const handleDelete = (id) => {
    dispatch(deleteEventItems({ id: id }));
  };

  // edit from store
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
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
        <p className="links">
          {description ? wordSlice(description) : wordSlice(dummyDescription)}
        </p>
        {/* actions button */}
        <div className="buttonContainer">
          {/* edit button */}
          <button type="button" onClick={() => handleEdit(id)}>
            Edit
          </button>
          {/* delete */}
          <button type="button" onClick={() => handleDelete(id)}>
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventItems;
