import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class FormSearch extends Component {
  render() {
    const { handleChange, banda, searchArtistOrAlbum, minInput } = this.props;
    return (
      <form>
        <label htmlFor="banda">
          Banda ou artista:
          <input
            type="text"
            id="banda"
            name="banda"
            data-testid="search-artist-input"
            onChange={ handleChange }
            value={ banda }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          disabled={ banda.length >= minInput ? '' : 'disabled' }
          onClick={ searchArtistOrAlbum }
        >
          Pesquisar
        </button>
      </form>
    );
  }
}

FormSearch.propTypes = {
  banda: PropTypes.shape({
    length: PropTypes.number,
  }),
  handleChange: PropTypes.function,
  searchArtistOrAlbum: PropTypes.function,
}.isRequired;
