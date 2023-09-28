import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Statistics } from 'components/Statistics'
import {RenderFriendsList} from 'components/FriendList'

import './index.css';
console.log(RenderFriendsList)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <App />
    <Statistics />
    <RenderFriendsList/>

  </React.StrictMode>
);