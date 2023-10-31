import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const navigateHandler = (path) => {
    navigate(path);
    setIsModalVisible(false);
  };

  return (
    <section>
      <section
        className="profile-icon-container"
        onClick={() => setIsModalVisible(!isModalVisible)}
      >
        <FontAwesomeIcon icon={faUser} />
      </section>
      {isModalVisible && (
        <section className="auth-modal">
          <button onClick={() => navigateHandler("/login")}>Login</button>
          <button onClick={() => navigateHandler("/signup")}>Sign Up</button>
        </section>
      )}
    </section>
  );
};
