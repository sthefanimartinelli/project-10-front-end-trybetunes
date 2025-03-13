import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';
import AlbumCard from '../components/AlbumCard';

function Search() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albuns, setAlbuns] = useState(undefined);

  const handleChangeInput = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await searchAlbumsAPI(search);
    setAlbuns(result.length > 0 ? result : undefined);
    setSearch('');
    setIsLoading(false);
  };

  return (
    <div data-testid="page-search">
      <Header />
      <form>
        <input
          type="text"
          value={ search }
          data-testid="search-artist-input"
          onChange={ handleChangeInput }
        />
        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={ search.length < 2 }
          onClick={ handleButtonClick }
        >
          Pesquisar
        </button>
      </form>
      {isLoading && <Loading />}
      {albuns === undefined && <p>Nenhum álbum foi encontrado</p>}
      {albuns?.length > 0 && <p>{`Resultado de álbuns de: ${albuns[0].artistName}`}</p>}
      {albuns && albuns.map((album) => (
        <AlbumCard key={ album.collectionId } album={ album } />
      ))}
    </div>
  );
}

export default Search;
