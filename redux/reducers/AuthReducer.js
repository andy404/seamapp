const initialAuthState = {isLoggedIn :false};


function Auth(state =initialAuthState,action){
     switch(action.type){
       case 'Login':
          return {...state,isLoggedIn:true};
       case 'Logout':
          return {...state,isLoggedIn:false};
        default :
          return state;
     }
}


export default Auth;
