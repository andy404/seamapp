import React from 'react';
import Store from './redux/store'
import { Provider } from 'react-redux';
import Navigation from './navigation/AppNavigation'

export default class App extends React.Component {

  render() {
    return (<Provider store={Store()}>
            <Navigation />
            </Provider> );
  }
}
