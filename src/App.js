import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <p>TrybeTunes</p>
        <Switch>
          <Route
            path="/search"
            render={ () => (
              <>
                <Header />
                <Search />
              </>) }
          />
          <Route
            path="/album/:id"
            render={ () => (
              <>
                <Header />
                <Album />
              </>) }
          />
          <Route
            path="/favorites"
            render={ () => (
              <>
                <Header />
                <Favorites />
              </>) }
          />
          <Route
            path="/profile"
            render={ () => (
              <>
                <Header />
                <Profile />
              </>) }
          />
          <Route
            path="/profile/edit"
            render={ () => (
              <>
                <Header />
                <ProfileEdit />
              </>) }
          />
          <Route exact path="/" component={ Login } />
          <Route path="/" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}

export default App;
