import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingMsg from './LoadingMsg';

class Header extends Component {
  state = {
    loading: false,
    userName: undefined,
  };

  componentDidMount() {
    this.handleUser();
  }

  handleUser = () => {
    this.setState(
      { loading: true },
      async () => {
        const user = await getUser();
        this.setState({
          loading: false,
          userName: user.name,
        });
      },
    );
  };

  render() {
    const { loading, userName } = this.state;
    return (
      <header data-testid="header-component">
        <div data-testid="header-user-name">{ userName }</div>
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
