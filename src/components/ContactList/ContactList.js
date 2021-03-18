import s from './ContactList.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions-phone/actions-phone';

const ContactList = ({ contacts, OnDeleteContact }) => (
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

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filter.toLowerCase()),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: visibleContacts(items, filter),
});
const mapDispatchToProps = dispatch => ({
  OnDeleteContact: id => dispatch(contactActions.deleteContacts(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
