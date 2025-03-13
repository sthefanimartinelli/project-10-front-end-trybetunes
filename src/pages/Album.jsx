import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Header from '../components/Header';

function Album() {
  [musicsList, setMusicsList] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const searchMusics = async () => {
      const musics = await getMusics(id);
      setMusicsList(musics);
    };

    searchMusics();
  }, [id]);

  return (
    <>
      <Header />
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
    </>
  );
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
}.isRequired;

export default Album;
