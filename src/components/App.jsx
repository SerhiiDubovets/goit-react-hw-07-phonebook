import { GlobalStyle } from './GlobalStyled';
import { Toaster } from 'react-hot-toast';

import InputForm from './InputForm';
import SearchFilter from './Filter';
import ContactList from './ContactList';

import { PhonebookTitle, Phonebook, ContactTitle } from './Phonebook.styled';

export default function App() {
  return (
    <Phonebook>
      <GlobalStyle />
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <InputForm />
      <ContactTitle>Contacts</ContactTitle>
      <SearchFilter />
      <ContactList />
      <Toaster />
    </Phonebook>
  );
}
