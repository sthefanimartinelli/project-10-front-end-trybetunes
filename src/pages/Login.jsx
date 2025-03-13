import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createUser } from '../services/userAPI';
import Button from '../components/Button';
import Loading from '../components/Loading';

function Login() {
  const [user, setUser] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const minNameInput = 3;

  const handleChange = ({ target: { value } }) => {
    setUser(value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await createUser({ name: user });
    setIsLoading(false);
    history.push('/search');
  };

  if (isLoading) return <Loading />;

  return (
    <div data-testid="page-login">
      <input
        type="text"
        name="loginName"
        id="loginName"
        value={ user }
        onChange={ handleChange }
        data-testid="login-name-input"
        placeholder="Qual é o seu nome?"
      />
      <Button
        datatestid="login-submit-button"
        handleLogin={ handleLogin }
        isDisable={ user.length < minNameInput }
      >
        Entrar
      </Button>
    </div>
  );
}

export default Login;
