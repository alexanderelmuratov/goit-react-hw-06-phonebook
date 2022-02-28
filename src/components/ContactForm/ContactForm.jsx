import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import { MdPerson, MdPhone } from 'react-icons/md';
import { Form, FormLabel, SearchInput, FormButton } from './ContactForm.styled';
import { addContact } from 'redux/contacts/contacts-actions';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
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
      {/* <MdPerson style={{ width: 20, height: 20 }} /> */}
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
          required
        />
      </FormLabel>
      {/* <MdPhone style={{ width: 20, height: 20 }} /> */}
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
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};
