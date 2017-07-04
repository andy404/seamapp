import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator,TabNavigator,NavigationActions } from 'react-navigation';

import Login  from '../scenes/login/LoginScreen';
import Home from '../scenes/home/HomeView';
import Profile from  '../scenes/profile/ProfileScreen';
import FeedList from '../scenes/feed/FeedList';
import SearchView from '../scenes/search/SearchView';

export const HomeScreenTabs = TabNavigator({
    MyFeed:{screen:FeedList,navigationOptions: { title: 'Home',headerLeft: null,header:false }},
    Search:{screen:SearchView,navigationOptions: { title: 'Search',headerLeft: null,header:false }},
    Settings:{screen:Profile,navigationOptions:  { title: 'Settings',headerLeft: null,header:false }}
});

export const PrimaryNav =StackNavigator({

      LoginScreen:{screen:Login,headerMode:'none',navigationOptions: { title: 'Login', header:false }},
      HomeScreen:{screen:HomeScreenTabs}

},{

  initialRouteName: 'HomeScreen',

});



const Navigation = ({dispatch,nav}) =>(
    <PrimaryNav navigation={addNavigationHelpers({dispatch,state:nav})}/>
)


// Start with two routes: The Main screen, with the Login screen on top.
const firstAction = PrimaryNav.router.getActionForPathAndParams('HomeScreen');
const tempNavState = PrimaryNav.router.getStateForAction(firstAction);
const secondAction = PrimaryNav.router.getActionForPathAndParams('LoginScreen');



Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
      nav:state.nav
});

// export const navReducer = (state = initialNavState, action) => {
//   const newState = PrimaryNav.router.getStateForAction(action, state)
//   return newState || state
// }

export const navReducer = (state , action) => {
    let nextState;
    switch(action.type){
        case 'LoginScreen':
            nextState = PrimaryNav.router.getStateForAction(  NavigationActions.back(),  state);
        break;
        case 'Logout':
          nextState = PrimaryNav.router.getStateForAction(NavigationActions.navigate({routeName:'Login'}),state);
          break;
        case 'HomeScreen':
            nextState = PrimaryNav.router.getStateForAction(NavigationActions.navigate({routeName:'HomeScreen'}),state);
            break;
        default:
            nextState =PrimaryNav.router.getStateForAction(action, state);
        break;
    }
    return nextState || state;
};


export default connect(mapStateToProps)(Navigation)
