import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

class SearchForm extends Component {
  state = { query: '', page: 1 };

  handelChange = e => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { handleSubmitForm } = this.props;

    handleSubmitForm(this.state);

    this.resetSearch();
  };

  resetSearch = () => {
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <form className={css.searchForm} onSubmit={this.handleSubmit}>
        <input
          onChange={this.handelChange}
          value={query}
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
      </form>
    );
  }
}

export default SearchForm;

SearchForm.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};
