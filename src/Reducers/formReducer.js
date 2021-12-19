import { RESET_FORM, SET_FORM_DETAILS, SET_FORM_NAME } from '../types';

const initialState = {
  formName: '',
  formDetails: {
    quesOrTitle: '',
    answerType: '',
    multipleChoices: '',
  },
};

export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_NAME:
      return {
        ...state,
        formName: action.name,
      };
    case SET_FORM_DETAILS:
      return {
        ...state,
        formDetails: action.formDetails,
      };
    case RESET_FORM:
      return initialState;
    default:
      return state;
  }
};
