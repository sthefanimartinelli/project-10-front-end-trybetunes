import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

function Header() {
  [isLoading, setIsLoading] = useState(true);
  [userName, setUserName] = useState(undefined);

  useEffect(() => {
    const fetchUser = async () => {
      const { userName } = await getUser();
      setUserName(userName);
      setIsLoading(false);
    };
    fetchUser();
  }, []);

  return (
    <header data-testid="header-component">
      {isLoading ? (
        <Loading />
      ) : (
        <div data-testid="header-user-name">{userName}</div>
      )}
      <nav>
        <Link to="/search" data-testid="link-to-search">
          Pesquisa
        </Link>
        <Link to="/favorites" data-testid="link-to-favorites">
          Músicas favoritas
        </Link>
        <Link to="/profile" data-testid="link-to-profile">
          Perfil
        </Link>
      </nav>
    </header>
  );
}

export default Header;
