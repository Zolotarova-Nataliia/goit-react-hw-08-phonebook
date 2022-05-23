import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const { data } = await axios.post("/contacts", contact);

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
