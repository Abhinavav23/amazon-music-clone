import React from "react";

export const Post = ({ data }) => {
  const {
    title,
    author: { profileImage, name },
    channel: { image, name: channelName },
    content,
    likeCount,
    commentCount,
  } = data;
  return (
    <section className="post-container">
      <header className="post-header">
        <img
          src={profileImage}
          alt={`profile of ${name}`}
          className="profile-img"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{title}</h3>
          <p>By: {name}</p>
        </div>
      </header>
      <aside>{content}</aside>

      <footer className="post-footer">
        <img
          src={image}
          alt={`profile of ${channelName}`}
          className="channel-img"
        />
        <p>channel: {name}</p>
        <p><button className="like-button">Like</button>: {likeCount}</p>
        <p>Comment: {commentCount}</p>
      </footer>
    </section>
  );
};
