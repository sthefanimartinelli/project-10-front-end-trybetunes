import React from 'react';
import { string, number, shape } from 'prop-types';
import { Link } from 'react-router-dom';

function AlbumCard({ album }) {
  const {
    artistId,
    artistName,
    collectionId,
    collectionName,
    collectionPrice,
    artworkUrl100,
    releaseDate,
    trackCount,
  } = album;

  return (
    <div>
      <p>{ artistId }</p>
      <p>{ artistName }</p>
      <p>{ collectionId }</p>
      <p>{ collectionName }</p>
      <p>{ collectionPrice }</p>
      <p>{ artworkUrl100 }</p>
      <p>{ releaseDate }</p>
      <p>{ trackCount }</p>
      <Link
        data-testid={ `link-to-album-${collectionId}` }
        to={ `/album/${collectionId}` }
      >
        Ver
      </Link>
    </div>
  );
}

AlbumCard.propTypes = {
  album: shape({
    artistId: number,
    artistName: string,
    collectionId: number,
    collectionName: string,
    collectionPrice: number,
    artworkUrl100: string,
    releaseDate: string,
    trackCount: number,
  }).isRequired,
};

export default AlbumCard;
