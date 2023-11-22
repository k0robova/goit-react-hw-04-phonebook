import React from 'react';
import css from './Filter.module.css';

export const Filter = ({ value, onFilterValueChange }) => {
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="contact_name"
        value={value}
        placeholder="Search..."
        onChange={onFilterValueChange}
        className={css.input_find}
      />
    </div>
  );
};
