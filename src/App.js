import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { createContext, useState } from "react";

export const AuthContext = createContext();

function App() {
  // let isUserLoggedIn;
  // const token = sessionStorage.getItem("userToken");
  // if(token){
  //   isUserLoggedIn = true
  // }else{
  //   isUserLoggedIn = false
  // }

  let isUserLoggedIn = sessionStorage.getItem("userToken") ? true: false

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  return (
    <div className="app-container">
      {/* navbar */}
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<h3>Social</h3>} />
          <Route path="/library" element={<h3>Library</h3>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myprofile" element={<h2>My Profile</h2>} />
          <Route path="*" element={<h3>Page not Found !!</h3>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
