import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  // let isUserLoggedIn;
  // const token = sessionStorage.getItem("userToken");
  // if(token){
  //   isUserLoggedIn = true
  // }else{
  //   isUserLoggedIn = false
  // }
  let isUserLoggedIn = sessionStorage.getItem("userToken") ? true : false;
  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
    </AuthContext.Provider>
  );
};

// custom hook
export const useAuth = () => {
   return useContext(AuthContext);
}

// let obj = {

// }