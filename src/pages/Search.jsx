import React from "react";
import { Link } from "react-router-dom";
import searchAlbumsAPI from "../services/searchAlbumsAPI";
import LoadingMsg from "../components/Loading";
import FormSearch from "../components/FormSearch";
import AlbumCard from "../components/AlbumCard";

class Search extends React.Component {
  state = {
    banda: "",
    onRequest: false,
    resultadoRequest: [],
    respostaPesquisa: false,
    msgPagina: "",
  };

  searchArtistOrAlbum = async () => {
    const { banda } = this.state;
    this.setState({
      onRequest: true,
    });
    const searchAlbum = await searchAlbumsAPI(banda);
    if (searchAlbum.length === 0) {
      this.setState({
        onRequest: false,
        msgPagina: "Nenhum álbum foi encontrado",
      });
    } else {
      this.setState({
        onRequest: false,
        msgPagina: `Resultado de álbuns de: ${banda}`,
      });
    }
    // console.log(searchAlbum);
    this.setState({
      banda: "",
      resultadoRequest: searchAlbum,
      respostaPesquisa: true,
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { banda, onRequest, resultadoRequest, respostaPesquisa, msgPagina } =
      this.state;
    const minInput = 2;
    return (
      <div data-testid="page-search">
        {onRequest && <LoadingMsg />}
        <FormSearch
          banda={banda}
          minInput={minInput}
          handleChange={this.handleChange}
          searchArtistOrAlbum={this.searchArtistOrAlbum}
        />
        {respostaPesquisa && (
          <div>
            <p>{msgPagina}</p>
            {resultadoRequest.map(
              ({ collectionId, artworkUrl100, collectionName, artistName }) => (
                <Link
                  key={collectionId}
                  to={`/album/${collectionId}`}
                  data-testid={`link-to-album-${collectionId}`}
                >
                  <AlbumCard
                    url={artworkUrl100}
                    banda={artistName}
                    album={collectionName}
                  />
                </Link>
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
