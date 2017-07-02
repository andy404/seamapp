import React from 'react';
import Store from './scenes/store'
import { Provider } from 'react-redux';
import AppWithNavigationState from './scenes/navigators/AppNavigator'

export default class App extends React.Component {

  render() {
    return (<Provider store={Store()}>
            <AppWithNavigationState />
            </Provider> );
  }
}
