import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { addPost, updateNewPostText } from './redux/state';

export const rerenderEntireTree = (state) => {
  console.log(state)
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={addPost}
          updateNewPostText={updateNewPostText}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
}