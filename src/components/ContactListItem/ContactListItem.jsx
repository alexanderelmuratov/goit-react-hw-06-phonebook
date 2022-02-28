import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import {
  ContactSetUnit,
  ContactInfo,
  DeleteButton,
} from './ContactListItem.styled';
import { deleteContact } from "redux/contacts/contacts-actions";

export const ContactListItem = ({
  contact: { id, name, number },
}) => {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ContactSetUnit>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButton>
    </ContactSetUnit>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};
