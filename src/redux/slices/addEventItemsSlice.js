import { createSlice } from '@reduxjs/toolkit';
import { eventData } from '../../data';

export const addEventItemsSlice = createSlice({
  name: 'eventItems',
  initialState: {
    eventItems: eventData,
  },
  reducers: {
    addEventItems: (state, action) => {
      // console.log('add event State:', action.payload);
      state.eventItems.push(action.payload);
    },

    updateEventItems: (state, action) => {
      const {
        id,
        name,
        date,
        fileType,
        attendees,
        fileSrc,
        link,
        description,
      } = action.payload;

      // getting id of event and updated
      const eventIndex = state.eventItems.findIndex((e) => e.id === Number(id));

      // files src / added to event images
      const sanitizedFileSrc = `/${fileSrc.trimStart('/')}`.replace(
        /\/+/g,
        '/'
      );
      const sanitizedAttendees = `/${attendees.trimStart('/')}`.replace(
        /\/+/g,
        '/'
      );

      if (eventIndex !== -1) {
        state.eventItems[eventIndex] = {
          id: Number(id),
          name: name,
          date: date,
          fileType: fileType,
          attendees: sanitizedAttendees,
          fileSrc: sanitizedFileSrc,
          link: link,
          description: description,
        };
      }

      console.log('redux:', action.payload);
      console.log('updated:', state.eventItems);
    },

    deleteEventItems: (state, action) => {
      // console.log(action.payload);
      state.eventItems = state.eventItems.filter(
        (e) => e.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addEventItems, updateEventItems, deleteEventItems } =
  addEventItemsSlice.actions;

export default addEventItemsSlice.reducer;
