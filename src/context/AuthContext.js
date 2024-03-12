import { createContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) = {

}

const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

  return (
    <AuthContext.Provider value={{...state, dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider