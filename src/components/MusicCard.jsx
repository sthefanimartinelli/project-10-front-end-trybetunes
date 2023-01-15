import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { trackName, previewUrl } = this.props;
    return (
      <div>
        <h2>{ trackName }</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
}.isRequired;
