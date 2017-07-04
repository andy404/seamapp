// import { AppNavigator } from '../../navigation/AppNavigation';
// import { NavigationActions } from 'react-navigation';
//
// // Start with two routes: The Main screen, with the Login screen on top.
// const firstAction = AppNavigator.router.getActionForPathAndParams('Home');
// const tempNavState = AppNavigator.router.getStateForAction(firstAction);
// const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
// const initialNavState = AppNavigator.router.getStateForAction(
//   secondAction,
//   tempNavState
// );
//
//
// const navReducer = (state =initialNavState, action) => {
//     let nextState;
//     switch(action.type){
//         case 'Login':
//             nextState = AppNavigator.router.getStateForAction(
//             NavigationActions.back(),
//             state
//           );
//         break;
//         case 'Logout':
//           nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({routeName:'Login'}),state);
//           break;
//         default:
//             nextState =AppNavigator.router.getStateForAction(action, state);
//         break;
//     }
//     return nextState || state;
// };
//
// export default navReducer;
