import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingMsg from './LoadingMsg';

class Header extends Component {
  state = {
    loading: undefined,
    // userName: undefined,
  };

  handleUser = () => {
    this.setState({
      loading: true,
    });
    getUser().then(() => {
      this.setState({
        loading: false,
        // userName: user,
      });
    });
    return user;
  };

  render() {
    const { loading } = this.state;
    return (
      <header data-testid="header-component">
        <p data-testid="header-user-name">{ this.handleUser }</p>
        { loading && <LoadingMsg /> }
        <nav>
          <ul>
            <li><Link to="/search" data-testid="link-to-search">Pesquisa</Link></li>
            <li>
              <Link
                to="/favorites"
                data-testid="link-to-favorites"
              >
                Músicas favoritas
              </Link>
            </li>
            <li><Link to="/profile" data-testid="link-to-profile">Perfil</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
