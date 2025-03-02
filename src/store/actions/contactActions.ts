import { ContactFormData } from '../../types/contact';

export const SAVE_CONTACT = 'SAVE_CONTACT';

export const saveContact = (contactData: ContactFormData) => ({
  type: SAVE_CONTACT,
  payload: contactData,
});
