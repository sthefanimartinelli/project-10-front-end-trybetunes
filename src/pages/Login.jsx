import React from 'react';
import { Redirect } from 'react-router-dom';
import LoadingMsg from '../components/LoadingMsg';
import { createUser } from '../services/userAPI';

class Login extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  state = {
    name: '',
    loading: false,
    amIlogged: false,
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onClick() {
    const { name } = this.state;
    this.setState({
      loading: true,
    });
    createUser({ name }).then(() => {
      this.setState({
        loading: false,
        amIlogged: true,
      });
    });
  }

  render() {
    const { name, loading, amIlogged } = this.state;
    const minInput = 3;
    if (amIlogged) {
      return <Redirect to="/search" />;
    }
    return (
      <div data-testid="page-login">
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              data-testid="login-name-input"
              onChange={ this.handleChange }
              value={ name }
            />
          </label>
          <button
            type="button"
            data-testid="login-submit-button"
            disabled={ name.length >= minInput ? '' : 'disabled' }
            onClick={ () => this.onClick({ name }) }
          >
            Entrar
          </button>
          { loading && <LoadingMsg /> }
        </form>
      </div>
    );
  }
}

export default Login;
