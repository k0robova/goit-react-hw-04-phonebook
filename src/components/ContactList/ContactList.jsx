import React from 'react';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={css.contact_item}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          onClick={() => onDeleteContact(id)}
          className={css.btn_delete}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);
