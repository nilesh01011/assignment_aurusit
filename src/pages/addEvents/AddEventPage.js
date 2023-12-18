import React, { useEffect, useState } from 'react';
import InputFields from '../../components/inputFields/InputFields';
import RadioButton from '../../components/radioButton/RadioButton';
import UploadEventFileItems from '../../components/uploadEventFile/UploadEventFileItems';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addEventItems,
  updateEventItems,
} from '../../redux/slices/addEventItemsSlice';
import { useNavigate, useParams } from 'react-router-dom';

function AddEventPage() {
  const { eventItems } = useSelector((state) => state.addEvent);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  // edit event
  const [eventGetById, setEventGetById] = useState([]);

  useEffect(() => {
    if (id) {
      const getEvents = eventItems.filter((e) => e.id == id);

      if (getEvents) {
        setEventGetById(getEvents);
      }
    }
  }, [id]);

  const { name, date, fileType, fileSrc, link, attendees } =
    eventGetById.length > 0 ? eventGetById[0] : {};

  // event name
  const [eventName, setEventName] = useState('');
  const [errorEventName, setErrorEventName] = useState('');
  // date value
  const [dates, setDates] = useState('');
  const [errorDate, setErrorDate] = useState('');
  // file types select
  const [radioType, setRadioType] = useState(id ? fileType : 'image');
  // event url value
  const [eventUrl, setEventUrl] = useState('');
  const [errorEventUrl, setErrorEventUrl] = useState('');
  // files types
  const [files, setFiles] = useState('');
  const [errorFiles, setErrorFiles] = useState('');
  // files attendeeFiles
  const [attendeeFiles, setAttendeeFiles] = useState('');
  const [errorAttendeeFiles, setErrorAttendeeFiles] = useState('');

  // useEffect(() => {
  //   if (id && eventGetById[0]) {
  //     setEventName(eventGetById[0]?.name);

  //     setDates(eventGetById[0]?.date);

  //     setEventUrl(eventGetById[0]?.link);

  //     setFiles(eventGetById[0]?.fileSrc);

  //     setAttendeeFiles(eventGetById[0]?.attendees);
  //   }
  // }, [eventGetById, id]);

  const handleFilesChange = (newFile) => {
    // console.log('files', newFile);
    setFiles(newFile);
  };

  const handleAttendeefilesChange = (newFile) => {
    // console.log('attendeeFiles', newFile);
    setAttendeeFiles(newFile);
  };

  const errorValidation = () => {
    // error handles
    if (files === '') {
      setErrorFiles('Event file is required!');
    }
    if (attendeeFiles === '') {
      setErrorAttendeeFiles('Attendee Files is required!');
    }
    if (dates === '') {
      setErrorDate('Event Date is required!');
    }
    if (eventUrl === '') {
      setErrorEventUrl('Event Url Link is required!');
    }
    if (eventName === '') {
      setErrorEventName('Event Name is required!');
    }
  };

  // submit file
  const handleSubmit = (e) => {
    // e.preventDefault();

    errorValidation();

    // console.log('add data:',eventName, dates, eventUrl, files, attendeeFiles);

    if (eventName && dates && eventUrl && files && attendeeFiles) {
      console.log(eventName && dates && eventUrl && files && attendeeFiles);
      // dispatch(
      //   addEventItems({
      //     id: eventItems.length + 1,
      //     name: eventName,
      //     date: dates,
      //     fileType: radioType,
      //     attendees: `/${attendeeFiles}`,
      //     fileSrc: `/${files}`,
      //     link: eventUrl,
      //     description: '',
      //   })
      // );

      // clear all values
      // setEventName('');
      // setDates('');
      // setRadioType('image');
      // setEventUrl('');
      // setFiles('');
      // setAttendeeFiles('');

      // navigate('/all-event');

      // setErrorEventName('');
      // setErrorDate('');
      // setErrorEventUrl('');
      // setErrorFiles('');
      // setErrorAttendeeFiles('');
    }
  };

  // update event
  const handleUpdate = (e) => {
    e.preventDefault();
    errorValidation();

    if (eventName && dates && eventUrl && files && attendeeFiles) {
      console.log(
        'Update Data:',
        eventName,
        dates,
        eventUrl,
        files,
        attendeeFiles
      );
      // dispatch(
      //   updateEventItems({
      //     id: id,
      //     name: eventName,
      //     date: dates,
      //     fileType: radioType,
      //     attendees: `/${attendeeFiles}`,
      //     fileSrc: `/${files}`,
      //     link: eventUrl,
      //   })
      // );

      // clear all values

      // setEventName('');
      // setDates('');
      // setRadioType('image');
      // setEventUrl('');
      // setFiles('');
      // setAttendeeFiles('');

      // navigate('/all-event');
    }
  };

  // handle events form
  const handleFormEvents = (e) => {
    e.preventDefault();

    if (id) {
      return handleUpdate();
    }

    handleSubmit();
  };

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
          <form
            className="addEventForm"
            onSubmit={handleFormEvents}
            // onSubmit={id ? handleUpdate : handleSubmit}
          >
            {/* InputFields */}
            <InputFields
              label="event name"
              inputType="text"
              placeholder="Name of the event"
              onChanged={setEventName}
              value={eventName}
              error={errorEventName}
              // edit event name
              editEvent={id && name}
            />
            <InputFields
              label="event date"
              inputType="date"
              placeholder="select event Date"
              onChanged={setDates}
              value={dates}
              error={errorDate}
              // edit event date
              editEvent={id && date}
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
            {/* ======================= file uploads ================ */}
            {/* event file type */}
            <UploadEventFileItems
              // error={error}
              label="Event file type"
              subtext="upload event file here"
              onFileChange={handleFilesChange}
              uploadFile={id ? fileSrc : files}
              formId="files"
              error={errorFiles}
            />
            {/* upload attendee list event */}
            <UploadEventFileItems
              // error={error}
              label="upload attendee list event"
              subtext="upload attendee list excel"
              onFileChange={handleAttendeefilesChange}
              uploadFile={id ? attendees : attendeeFiles}
              formId="attendeefiles"
              error={errorAttendeeFiles}
            />

            {/* event url link */}
            <InputFields
              label="event web link"
              inputType="url"
              placeholder="Enter URL"
              onChanged={setEventUrl}
              value={eventUrl}
              error={errorEventUrl}
              // edit event links
              editEvent={id && link}
            />
            {/* submit button */}
            <div className="submitBtn">
              <button type="submit" className={`buttons largeBtn`}>
                {/* {id ? 'update' : 'submit'} */}
                submit
              </button>
              {/* show all events items */}
              <Link to="/all-event" className="links">
                see all event
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default AddEventPage;
