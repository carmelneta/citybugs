// counter.ts
import { Action, ActionReducer } from '@ngrx/store';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface User {  
  uid: string;
}

export interface UserCrendetials {  
  email: string;
  password: string;
}

export interface AuthState {  
  loged: Boolean;
  data: User; 
}
const initialState: AuthState = {
    loged: false,
    data: null
}

export const authReducer:ActionReducer<AuthState> = ( state = initialState, action: Action):AuthState => {
    // console.log(state, action);        
    switch (action.type) {
        
        case LOGIN:
            return {
                loged: true,
                data: action.payload
            };

        case LOGOUT:
            return {
                loged: false,
                data: null
            };
 
        default:
            return state;
    }
}