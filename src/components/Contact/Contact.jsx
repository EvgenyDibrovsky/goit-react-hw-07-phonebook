import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';
import css from './Contact.module.css';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
      <li className={css.contactListItem}>
        <p>
          <span className={css.formName}>{name}:</span>{' '}
          <span className={css.formNumber}>{number}</span>
        </p>
        <button
          className={css.contactListItemBtn}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
