import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';

const addContact = createAction('contacts/Add', (name, number) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
const deleteContacts = createAction('contacts/Delete');
const changeFilter = createAction('contacts/changeFilter');

const contactActions = { addContact, deleteContacts, changeFilter };
export default contactActions;

//REDUX

// import * as types from '../types-phone/types-phone';

// export const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
//   },
// });

// export const deleteContacts = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

// export const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });
