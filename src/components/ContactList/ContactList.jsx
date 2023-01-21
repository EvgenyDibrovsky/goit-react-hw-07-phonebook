import { Contact } from 'components/Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { selectFilter } from 'redux/filter/filter-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { Loader } from 'components/Loader/Loader';
import css from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <>
      {isLoading && <Loader />}
      <ul className={css.contactList}>
        {filtredContacts.map(({ name, phone, id }) => {
          return <Contact key={id} id={id} name={name} number={phone} />;
        })}
      </ul>
    </>
  );
};
