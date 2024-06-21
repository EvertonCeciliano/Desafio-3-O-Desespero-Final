import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  name: string
  email: string
  subject: string
  message: string
}

interface ContactsState {
  contacts: Contact[]
}

const initialState: ContactsState = {
  contacts: []
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveContact(state, action: PayloadAction<Contact>) {
      state.contacts.push(action.payload)
    }
  }
});

export const { saveContact } = contactsSlice.actions;
export default contactsSlice.reducer