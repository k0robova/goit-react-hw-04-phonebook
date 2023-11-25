import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './App.module.css';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const { name, number } = data;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contactcs!`);
      return;
    } else {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      setContacts(prevState => [...prevState, newContact]);
    }
  };

  const onFilterValueChange = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleAllContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  // use effect

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  return (
    <div>
      <h1 className={css.main_title}>Phonebook</h1>
      <Form onSubmitForm={formSubmitHandler} />

      <h2 className={css.second_title}>Contacts</h2>
      <Filter value={filter} onFilterValueChange={onFilterValueChange} />
      <ContactList
        contacts={getVisibleAllContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

// !====================================================================================

// export class App extends React.Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     const { name, number } = data;

//     if (
//       this.state.contacts.some(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert(`${name} is already in contactcs!`);
//       return;
//     } else {
//       const newContact = {
//         id: nanoid(),
//         name: name,
//         number: number,
//       };

//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, newContact],
//       }));
//     }
//   };
//   onFilterValueChange = evt => {
//     this.setState({ filter: evt.currentTarget.value });
//   };

//   getVisibleAllContacts = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
//     );
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);
//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1 className={css.main_title}>Phonebook</h1>
//         <Form onSubmitForm={this.formSubmitHandler} />

//         <h2 className={css.second_title}>Contacts</h2>
//         <Filter
//           value={this.state.filter}
//           onFilterValueChange={this.onFilterValueChange}
//         />
//         <ContactList
//           contacts={this.getVisibleAllContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
