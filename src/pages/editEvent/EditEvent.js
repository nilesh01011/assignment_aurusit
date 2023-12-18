import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InputFields from '../../components/inputFields/InputFields';
import UploadEventFileItems from '../../components/uploadEventFile/UploadEventFileItems';
import RadioButton from '../../components/radioButton/RadioButton';

function EditEvent() {
  const { eventItems } = useSelector((state) => state.addEvent);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { id } = useParams();

  // edit event
  const [isEdit, setIsEdit] = useState(false);
  const [eventGetById, setEventGetById] = useState([]);

  useEffect(() => {
    if (id) {
      setIsEdit(true);

      const getEvents = eventItems.filter((e) => e.id === Number(id));

      if (getEvents) {
        setEventGetById(getEvents);
      }
    }
  }, [id]);

  // event name
  const [eventName, setEventName] = useState("");

  console.log(eventGetById[0]?.name)

  const [errorEventName, setErrorEventName] = useState('');
  // date value
  const [date, setDate] = useState(id && eventGetById[0]?.date);
  const [errorDate, setErrorDate] = useState('');
  // file types select
  const [radioType, setRadioType] = useState('image');
  // event url value
  const [eventUrl, setEventUrl] = useState(id && eventGetById[0]?.link);
  const [errorEventUrl, setErrorEventUrl] = useState('');
  // files types
  const [files, setFiles] = useState(id && eventGetById[0]?.fileSrc);
  const [errorFiles, setErrorFiles] = useState('');
  // files attendeeFiles
  const [attendeeFiles, setAttendeeFiles] = useState(id && eventGetById[0]?.attendees);
  const [errorAttendeeFiles, setErrorAttendeeFiles] = useState('');

  
  const handleFilesChange = (newFile) => {
    // console.log('files', newFile);
    setFiles(newFile);
  };

  const handleAttendeefilesChange = (newFile) => {
    // console.log('attendeeFiles', newFile);
    setAttendeeFiles(newFile);
  };

//   useEffect(() => {
//     if (id && eventGetById[0]) {
//       setEventName(eventGetById[0]?.name);

//       setDate(eventGetById[0]?.date);

//       setEventUrl(eventGetById[0]?.link);

//       setFiles(eventGetById[0]?.fileSrc);

//       setAttendeeFiles(eventGetById[0]?.attendees);
//     }
//   }, [eventGetById, id]);

  const errorValidation = () => {
    // error handles
    if (files === '') {
      setErrorFiles('Event file is required!');
    }
    if (attendeeFiles === '') {
      setErrorAttendeeFiles('Attendee Files is required!');
    }
    if (date === '') {
      setErrorDate('Event Date is required!');
    }
    if (eventUrl === '') {
      setErrorEventUrl('Event Url Link is required!');
    }
    if (eventName === '') {
      setErrorEventName('Event Name is required!');
    }
  };

  // update file
  const handleUpdate = (e) => {
    e.preventDefault();

    errorValidation();

    if (eventName && date && eventUrl && files && attendeeFiles) {
      console.log(eventName, date, eventUrl, files, attendeeFiles);

      // dispatch(
      //   addEventItems({
      //     id: eventItems.length + 1,
      //     name: eventName,
      //     date: date,
      //     fileType: radioType,
      //     attendee: attendeeFiles,
      //     fileSrc: files,
      //     link: eventUrl,
      //     description: '',
      //   })
      // );

      // clear all values
      setEventName('');
      setDate('');
      setRadioType('image');
      setEventUrl('');
      setFiles('');
      setAttendeeFiles('');

      navigate('/all-event');

      // setErrorEventName('');
      // setErrorDate('');
      // setErrorEventUrl('');
      // setErrorFiles('');
      // setErrorAttendeeFiles('');
    }
  };
  return (
    <div className="container">
      {/* header */}
      <div className="empty_space" />
      {/* main */}
      <main>
        <div className="main_Container formContainer">
          {/* title */}
          <h2>Update an Events</h2>

          {/* form contents */}
          <form className="addEventForm" onSubmit={handleUpdate}>
            {/* InputFields */}
            <InputFields
              label="event name"
              inputType="text"
              placeholder="Name of the event"
              onChanged={setEventName}
              value={eventName}
              error={errorEventName}
            />
            <InputFields
              label="event date"
              inputType="date"
              placeholder="select event Date"
              onChanged={setDate}
              value={date}
              error={errorDate}
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
              uploadFile={files}
              formId="files"
              error={errorFiles}
            />
            {/* upload attendee list event */}
            <UploadEventFileItems
              // error={error}
              label="upload attendee list event"
              subtext="upload attendee list excel"
              onFileChange={handleAttendeefilesChange}
              uploadFile={attendeeFiles}
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
            />
            {/* submit button */}
            <div className="submitBtn">
                <button type="submit" className={`buttons largeBtn`}>
                  Update
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

export default EditEvent;
