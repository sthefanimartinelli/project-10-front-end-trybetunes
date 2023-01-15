// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class AlbumCard extends Component {
  render() {
    const { url, banda, album } = this.props;
    return (
      <div>
        <h2>{banda}</h2>
        <h3>{album}</h3>
        <img src={ url } alt={ album } />
      </div>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.string,
  banda: PropTypes.string,
  url: PropTypes.string,
}.isRequired;
