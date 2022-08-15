import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contactApi';
import { getFilter } from 'redux/Contacts/slice';

import ContactItem from 'components/ContactItem/ContactItem';
import Loader from 'components/Loader/Loader';

import { BlockContact, List, Text } from './ContactList.styled';

const ContactList = () => {
  const value = useSelector(getFilter);
  const { data: contacts, isFetching } = useFetchContactsQuery();

  const filterCont = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  const contact = filterCont();

  return (
    <BlockContact>
      {isFetching && <Loader />}
      {contacts && (
        <List>
          {contact.length === 0 ? (
            <Text>Contacts not found...</Text>
          ) : (
            contact.map(({ id, name, phone }) => (
              <ContactItem
                key={id}
                name={name}
                number={phone}
                id={id}
              ></ContactItem>
            ))
          )}
        </List>
      )}
    </BlockContact>
  );
};

export default ContactList;
