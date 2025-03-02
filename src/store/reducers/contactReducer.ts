import { SAVE_CONTACT } from '../actions/contactActions';
import { ContactFormData } from '../../types/contact';

interface ContactState {
  contacts: ContactFormData[];
}

const initialState: ContactState = {
  contacts: [],
};

export const contactReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};
