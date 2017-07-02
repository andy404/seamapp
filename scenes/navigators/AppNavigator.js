import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import Login  from '../login/LoginScreen';
import Home from '../home/HomeView';
import Profile from  '../profile/ProfileScreen';

export const AppNavigator =StackNavigator({
    Login:{screen:Login},
    Home:{screen:Home},
    Profile:{screen:Profile}
});


const AppWithNavigationState = ({dispatch,nav}) =>(
    <AppNavigator navigation={addNavigationHelpers({dispatch,state:nav})}/>
)


AppWithNavigationState.propTypes ={
  dispatch:PropTypes.func.isRequired,
  nav:PropTypes.object.isRequired
};

const mapStateToProps = state =>({
      nav:state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);
