import React from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  state = {
    musicsList: [],
  };

  async componentDidMount() {
    this.searchMusics();
  }

  searchMusics = async () => {
    const { match } = this.props;
    // console.log(match);
    const { params } = match;
    const { id } = params;
    const musics = await getMusics(id);
    // console.log(musics);
    this.setState({
      musicsList: musics,
    });
  };

  render() {
    const { musicsList } = this.state;
    return (
      <div data-testid="page-album">
        {musicsList.length > 0 && (
          <div>
            <h2 data-testid="artist-name">{ musicsList[0].artistName }</h2>
            <p data-testid="album-name">{ musicsList[0].collectionName }</p>
            { musicsList.slice(1).map((music) => (
              <MusicCard
                key={ music.trackId }
                trackId={ music.trackId }
                trackName={ music.trackName }
                previewUrl={ music.previewUrl }
                musicObj={ music }
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Album;

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;
