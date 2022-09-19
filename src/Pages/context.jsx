import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialvalue = {
  isOpenNow: false,
  isOpenNowindiegogo: false,
  isOpenNowmobnav: false,
  isAuth:false,
};

function reducer(state, action) {
  switch (action.type) {
    case "opensocloudy": {
      return {
        ...state,
        isOpenNow: true,
      };
    }
    case "closesocloudy": {
      return {
        ...state,
        isOpenNow: false,
      };
    }
    case "openindiegogo": {
      return {
        ...state,
        isOpenNowindiegogo: true,
      };
    }
    case "closeindiegogo": {
      return {
        
        ...state,
        isOpenNowindiegogo: false,
      };
    }
    default: {
      return state;
    }
  }
}

function AuthContextprovider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthContextprovider;
