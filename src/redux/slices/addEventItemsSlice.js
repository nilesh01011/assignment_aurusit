import { createSlice } from '@reduxjs/toolkit';
import { eventData } from '../../data';

export const addEventItemsSlice = createSlice({
  name: 'eventItems',
  initialState: {
    eventItems: eventData,
  },
  reducers: {
    addEventItems: (state, action) => {
      console.log("add event State:",action.payload)
      state.eventItems.push(action.payload);
    },

    updateEventItems: (state, action) => {
      const { id, eventName, date, radioType, attendeeFiles, files, eventUrl } =
        action.payload;

      const eventDataUpdate = state.eventItems.find((e) => e.id == id);

      if (eventDataUpdate) {
        eventDataUpdate.name = eventName;
        eventDataUpdate.date = date;
        eventDataUpdate.fileType = radioType;
        eventDataUpdate.attendees = attendeeFiles;
        eventDataUpdate.fileSrc = files;
        eventDataUpdate.link = eventUrl;
      }
    },

    deleteEventItems: (state, action) => {
      console.log(action.payload);
      state.eventItems = state.eventItems.filter(
        (e) => e.id !== action.payload.id
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addEventItems,
  updateEventItems,
  deleteEventItems,
} = addEventItemsSlice.actions;

export default addEventItemsSlice.reducer;
