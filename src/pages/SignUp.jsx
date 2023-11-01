import axios from "axios";
import React, { useContext, useRef } from "react";
import { getHeaderWithProjectId } from "../utils/service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const createUser = async (user) => {
    const config = getHeaderWithProjectId();
    try {
      const res = await axios.post(
        "https://academics.newtonschool.co/api/v1/user/signup",
        { ...user, appType: "music" },
        config
      );
      console.log("res", res);
      const token = res.data.token;
      if (token) {
        sessionStorage.setItem("userToken", token);
        sessionStorage.setItem(
          "userName",
          JSON.stringify(res.data.data.user.name)
        );
        setIsLoggedIn(true);
        navigate("/home");
      }
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userDetails = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    createUser(userDetails);
  };

  return (
    <form action="" className="form-container" onSubmit={handleFormSubmit}>
      <h2>SignUp</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" ref={nameRef} />
      </div>
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
        <input type="submit" value="SignUp" />
      </div>
    </form>
  );
};
