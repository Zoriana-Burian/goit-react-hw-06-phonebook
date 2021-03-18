import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/actions-phone/actions-phone';

const ContactList = () => {
  const contacts = useSelector(state =>
    visibleContacts(state.contacts.items, state.contacts.filter),
  );
  const dispatch = useDispatch();
  const OnDeleteContact = id => dispatch(contactActions.deleteContacts(id));
  return (
    <ul className={s.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contacts} key={id}>
          <p className={s.name}>{name}:</p>
          <p className={s.number}>{number}</p>
          <button
            type="button"
            onClick={() => OnDeleteContact(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propType = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  OnDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

//REDUX

//import { connect} from 'react-redux';

// const mapStateToProps = ({ contacts: { items, filter } }) => ({
//   contacts: visibleContacts(items, filter),
// });
// const mapDispatchToProps = dispatch => ({
//   OnDeleteContact: id => dispatch(contactActions.deleteContacts(id)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
