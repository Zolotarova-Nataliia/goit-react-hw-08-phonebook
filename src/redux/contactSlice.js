import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [], filter: "" },
  reducers: {
    addToContacts(state, action) {
      state.items.push({
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    addFilter(state, action) {
      state.filter = action.payload;
    },
    removeFromContacts(state, action) {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});
export const { addToContacts, removeFromContacts, addFilter } =
  contactsSlice.actions;
