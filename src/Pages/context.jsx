import { useReducer } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const initialvalue = {
  isOpenNow: false,
  isOpenNowindiegogo: false,
  isOpenNowmobnav: false,
  isOpenNownetflix: false,
  isOpenNowecom: false,
  isOpenNowtranslator: false,
  isAuth: false,
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
    case "opennetflix": {
      return {
        ...state,
        isOpenNownetflix: true,
      };
    }
    case "closenetflix": {
      return {
        ...state,
        isOpenNownetflix: false,
      };
    }
    case "openecom": {
      return {
        ...state,
        isOpenNowecom: true,
      };
    }
    case "closeecom": {
      return {
        ...state,
        isOpenNowecom: false,
      };
    }
    case "opentranslator": {
      return {
        ...state,
        isOpenNowtranslator: true,
      };
    }
    case "closetranslator": {
      return {
        ...state,
        isOpenNowtranslator: false,
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
