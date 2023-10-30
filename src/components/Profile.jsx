import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const Profile = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
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
          <button>Sign In</button>
          <button>Sign Up</button>
        </section>
      )}
    </section>
  );
};
