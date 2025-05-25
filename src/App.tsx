import css from './App.module.css';

import { ContactForm } from './components/ContactForm/ContactForm.tsx';
import { SearchBox } from './components/SearchBox/SearchBox.tsx';
import { ContactList } from './components/ContactList/ContactList.tsx';

import contactsData from './data/contacts.json';
import { useEffect, useState } from 'react';

interface Contact {
  id: string;
  name: string;
  phone: string;
}

interface ContactListData {
  contacts: Contact[];
}

function App() {
  const storageKey = 'phoneBook';
  const [contacts, setContacts] = useState<ContactListData>(() => {
    const storedValue = window.localStorage.getItem(storageKey);
    if (storedValue) {
      try {
        return JSON.parse(storedValue) as ContactListData;
      } catch (error) {
        console.error('Failed to parse contacts from localStorage:', error);
      }
    }

    return {
      contacts:
        contactsData.map(contact => ({
          id: contact.id,
          name: contact.name,
          phone: contact.number,
        })) || [],
    };
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts, storageKey]);

  const handleFilterChange = (value: string) => {
    setFilter(value);
  };

  const handleAddContact = (newContact: Contact) => {
    setContacts(prevContacts => ({
      contacts: [...prevContacts.contacts, newContact],
    }));
  };

  const handleDeleteContact = (id: string) => {
    setContacts(prevContacts => ({
      contacts: prevContacts.contacts.filter(contact => contact.id !== id),
    }));
  };

  const filteredContacts = contacts.contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className={css.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <SearchBox value={filter} onChange={handleFilterChange} />
        {contacts && (
          <ContactList
            contacts={filteredContacts}
            onDelete={handleDeleteContact}
          />
        )}
      </div>
    </>
  );
}

export default App;
