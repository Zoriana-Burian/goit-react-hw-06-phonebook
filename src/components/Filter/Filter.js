import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as contactActions from '../../redux/actions-phone/actions-phone';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input
      className={s.input}
      type="text"
      value={value}
      onChange={onChange}
    ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter
})
const mapDispatchToProps = dispatch => ({
  onChange: (event) => dispatch(contactActions.changeFilter(event.target.value))
})
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
