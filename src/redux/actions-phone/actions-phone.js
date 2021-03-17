import shortid from 'shortid';
import * as types from '../types-phone/types-phone';



 export const addContact = (name, number) => ({
    type: types.ADD,
    payload: {
        id: shortid.generate(),
        name,
        number,
    }
}
)

export const deleteContacts = contactId => ({
    type: types.DELETE,
    payload: contactId
})

 export const changeFilter = value => ({
    type: types.CHANGE_FILTER,
    payload: value
})

