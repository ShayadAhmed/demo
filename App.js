import * as React from 'react';
import Nav from './src/navigations'
import { Provider } from 'react-redux'
import store from './src/store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    );
  }
}

