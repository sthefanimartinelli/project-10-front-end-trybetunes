import React from 'react';

class Search extends React.Component {
  state = {
    banda: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { banda } = this.state;
    const minInput = 2;
    return (
      <div data-testid="page-search">
        <form>
          <label htmlFor="banda">
            Banda ou artista:
            <input
              type="text"
              id="banda"
              name="banda"
              data-testid="search-artist-input"
              onChange={ this.handleChange }
              value={ banda }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ banda.length >= minInput ? '' : 'disabled' }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
