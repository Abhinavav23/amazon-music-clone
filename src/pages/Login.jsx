import axios from "axios";
import React, { useRef } from "react";
import { getHeaderWithProjectId } from "../utils/service";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const {setIsLoggedIn} =  useAuth();
  const {state} = useLocation();

  const loginUser = async (user) => {
    const config = getHeaderWithProjectId();
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/login",
        { ...user, appType: "music" },
        config
      );
      console.log("res", res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem("userName", JSON.stringify(res.data.data.name));
        setIsLoggedIn(true);
        if(state){
          navigate(state.prevPath);
        }else{
          navigate("/home")
        }
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    loginUser(userDetails);
  };

  return (
    <form action="" className="form-container" onSubmit={handleFormSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
        />
      </div>
      <div>
        <input type="submit" value="Login" />
      </div>
    </form>
  );
};
