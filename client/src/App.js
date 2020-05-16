import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import Routing from './routes';
// import { loadUser } from './component/auth/action';
// import setAuthToken from './utils/setAuthToken';

// if (localStorage.token) {
// setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
