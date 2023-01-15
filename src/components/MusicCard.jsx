import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { addSong } from '../services/favoriteSongsAPI';
import LoadingMsg from './LoadingMsg';

export default class MusicCard extends Component {
  state = {
    onRequest: false,
    checked: false,
  };

  handleFavoriteMusics = async ({ target }) => {
    const { checked } = target;
    const { musicObj } = this.props;
    this.setState({
      onRequest: true,
    });
    if (checked) {
      await addSong(musicObj);
    }
    this.setState({
      onRequest: false,
      checked,
    });
  };

  render() {
    const { trackName, previewUrl, trackId } = this.props;
    const { onRequest, checked } = this.state;
    return (
      <div>
        { onRequest && <LoadingMsg /> }
        <h2>{ trackName }</h2>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackName } data-testid={ `checkbox-music-${trackId}` }>
          Favorita:
          <input
            id={ trackName }
            name={ trackName }
            type="checkbox"
            onChange={ this.handleFavoriteMusics }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: PropTypes.string,
  trackName: PropTypes.string,
  trackId: PropTypes.number,
}.isRequired;
