import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/actions-phone/actions-phone';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contacts.filter);
  const onChange = event =>
    dispatch(contactActions.changeFilter(event.target.value));
  return (
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
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
};

//REDUX

//import { connect } from 'react-redux';

// const mapStateToProps = state => ({
//   value: state.contacts.filter,
// });
// const mapDispatchToProps = dispatch => ({
//   onChange: event => dispatch(contactActions.changeFilter(event.target.value)),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(Filter);
