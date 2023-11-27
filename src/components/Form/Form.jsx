import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';

export function Form({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = evt => {
    setName(evt.target.value);
  };

  const handleNumberChange = evt => {
    setNumber(evt.target.value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmitForm({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.main_form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit" className={css.btn_submit}>
        Add contact
      </button>
    </form>
  );
}
