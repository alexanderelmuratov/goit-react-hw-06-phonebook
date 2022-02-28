// import { useDispatch } from "react-redux";
// import PropTypes from 'prop-types';
import {
  ContactSetUnit,
  ContactInfo,
  DeleteButton,
} from './ContactListItem.styled';
// import { deleteContact } from "redux/contacts/contacts-actions";

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => {
  // const dispatch = useDispatch();
  // const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContactSetUnit>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => onDelete(id)}>
        Delete
      </DeleteButton>
    </ContactSetUnit>
  );
}

// ContactListItem.propTypes = {
//   contact: PropTypes.objectOf(PropTypes.string.isRequired),
// };
