import React from 'react';
import { Route } from 'react-router-dom';

import { DialogsContainer, Header, Navbar, Profile, News, Music, Settings } from './components';

import './app.scss';


function App() {

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper--content">
        <Route
          path="/profile"
          render={() =>
            <Profile />
          }
        />
        <Route
          path="/dialogs"
          render={() => (
            <DialogsContainer />
          )}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
