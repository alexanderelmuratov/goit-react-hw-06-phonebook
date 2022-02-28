import { useSelector, useDispatch } from "react-redux";
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactSet, ContactsError } from './ContactList.styled';
import { deleteContact } from "redux/contacts/contacts-actions";

export const ContactList = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const contacts = useSelector(state => {
    console.log(state);
    return state.contacts.items;    
  });
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const onDeleteContact = id => {    
    console.log(dispatch(deleteContact(id)));
    return dispatch(deleteContact(id));
  };
  

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();
  console.log(filteredContacts);

  return (
    filteredContacts.length !== 0
      ? (
        <ContactSet>
          {filteredContacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
              onDelete={onDeleteContact}
            />
          ))}
        </ContactSet>
      )
      : <ContactsError>There's no information</ContactsError> 
  );
};
