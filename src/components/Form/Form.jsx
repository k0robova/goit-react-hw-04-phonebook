import React from 'react';
import css from './Form.module.css';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={css.main_form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <label>
          Number
          <input
            type="tel "
            name="number"
            required
            value={this.state.number}
            onChange={this.handleNameChange}
          />
        </label>
        <button type="submit" className={css.btn_submit}>
          Add contact
        </button>
      </form>
    );
  }
}
