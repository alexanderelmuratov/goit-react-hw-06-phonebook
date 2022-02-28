import { Toaster } from 'react-hot-toast';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { ContactsTitle } from './App.styled';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Section title="Phonebook">
        <ContactForm />
        <ContactsTitle>Contacts</ContactsTitle>
        <Filter />
        <ContactList />      
      </Section>
      <Toaster position="top-right"/>
    </>
  );
};
