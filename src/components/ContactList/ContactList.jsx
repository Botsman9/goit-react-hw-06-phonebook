import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../Redux/phonebook-actions';
import { getVisibleContacts } from '../Redux/phonebook-selectors';
import s from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>
            {name}: {number}
          </p>
          <button
            type="button"
            onClick={() => onDeleteContact(id)}
            className={s.button}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
