import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ query, handelChange, handleSubmit }) => (
  <>
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        autoComplete="off"
        onChange={handelChange}
        placeholder="Search images..."
      />
    </form>
  </>
);

SearchForm.propTypes = {
  query: PropTypes.string.isRequired,
  handelChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchForm;

// export default class SearchForm extends Component {
//   state = { query: '' };

// handelChange = e => {
//   this.setState({
//     query: e.target.value,
//   });
// };

// handelSubmit = e => {
//   e.preventDefault();

//   this.props.handelSubmit(this.state.query);

//   this.setState({
//     query: '',
//   });
// };

//   render() {
//     const { query } = this.state;
//     return (
//       <>
//         <form className="search-form">
//           <input
//             type="text"
//             value={query}
//             autoComplete="off"
//             onChange={this.handelChange}
//             placeholder="Search images..."
//           />
//         </form>
//       </>
//     );
//   }
// }
