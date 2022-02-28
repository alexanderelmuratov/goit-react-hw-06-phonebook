import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { MdPerson, MdPhone } from 'react-icons/md';
import { Form, FormLabel, SearchInput, FormButton } from './ContactForm.styled';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { addContact } from 'redux/contacts/contacts-actions';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name === '' || number === '') {
      return toast.error('Please, fill in all fields!');
    }

    const existingContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContacts) {
      toast.error(`${name} is already in contacts!`);
      resetForm();
      return;
    }

    const item = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(item));
    toast.success(`${name} added to contacts!`);  
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        <MdPerson style={{ width: 18, height: 18, marginRight: '5px' }} />
        Name        
        <SearchInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          autoFocus
        />
      </FormLabel>
      <FormLabel>
        <MdPhone style={{ width: 18, height: 18, marginRight: '5px' }} />
        Number        
        <SearchInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          autoFocus
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};
