import React from 'react';
import { useState } from 'react';
import css from './Form.module.css';

// const [name, setName] = useLocalStorage('email', '');
// const [number, setNumber] = useLocalStorage('number', '');

// const useLocalStorage = (key, valueDefault) => {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? valueDefault;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// };

// usestateSnipet - and Tab for camelCase

export function Form({ onSubmitForm }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleNameSubmit = evt => {
    const { name, value } = evt.currentTarget;
    // setName({ [name]: value });
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();
    onSubmitForm({
      name,
      number,
    });
    resetForm();
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.main_form}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameSubmit}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          required
          value={number}
          onChange={handleNameSubmit}
        />
      </label>
      <button type="submit" className={css.btn_submit}>
        Add contact
      </button>
    </form>
  );
}

// !================================================================
// export class Form extends React.Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleNameChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleFormSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmitForm(this.state);
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleFormSubmit} className={css.main_form}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//         </label>
//         <label>
//           Number
//           <input
//             type="tel "
//             name="number"
//             required
//             value={this.state.number}
//             onChange={this.handleNameChange}
//           />
//         </label>
//         <button type="submit" className={css.btn_submit}>
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
