import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends Component {
  state = { query: '', page: 1 };

  handelChange = e => {
    this.setState({
      query: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();

    const { handleSubmitGalery } = this.props;

    handleSubmitGalery(this.state);

    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    return (
      <>
        <form className="search-form" onSubmit={this.handleSubmitForm}>
          <input
            type="text"
            value={query}
            autoComplete="off"
            onChange={this.handelChange}
            placeholder="Search images..."
          />
        </form>
      </>
    );
  }
}

SearchForm.propTypes = {
  handleSubmitGalery: PropTypes.func.isRequired,
};
