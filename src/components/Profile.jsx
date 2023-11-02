import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../provider/AuthProvider";

export const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const userName = JSON.parse(sessionStorage.getItem("userName"));

  const navigateHandler = (path) => {
    navigate(path);
    setIsModalVisible(false);
  };

  const logout = () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("userName");
    setIsLoggedIn(false);
    navigateHandler("/login");
  };

  return (
    <section>
      <section
        className="profile-icon-container"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <section className="profile-icon">
          <FontAwesomeIcon icon={faUser} />
        </section>

        {isLoggedIn && <span>{userName}</span>}
      </section>
      {isModalVisible && (
        <section className="auth-modal">
          {isLoggedIn ? (
            <>
              <button onClick={() => navigateHandler("/myProfile")}>
                My Profile
              </button>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => navigateHandler("/login")}>Login</button>
              <button onClick={() => navigateHandler("/signup")}>
                Sign Up
              </button>
            </>
          )}
        </section>
      )}
    </section>
  );
};
