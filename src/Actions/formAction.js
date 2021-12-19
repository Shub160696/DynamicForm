import { SET_FORM_DETAILS, SET_FORM_NAME, RESET_FORM } from '../types';

export const setFormName = (name) => ({ type: SET_FORM_NAME, name });

export const setFormDetails = (formDetails) => ({
  type: SET_FORM_DETAILS,
  formDetails,
});

export const resetForm = () => ({
  type: RESET_FORM,
});
