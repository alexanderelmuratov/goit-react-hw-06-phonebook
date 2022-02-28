import { useSelector } from "react-redux";
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { ContactSet, ContactsError } from './ContactList.styled';
import { getVisibleContacts } from "redux/contacts/contacts-selectors";

export const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  
  return (
    contacts.length !== 0
      ? (
        <ContactSet>
          {contacts.map(contact => (
            <ContactListItem
              key={contact.id}
              contact={contact}
            />
          ))}
        </ContactSet>
      )
      : <ContactsError>There's no information</ContactsError> 
  );
};
