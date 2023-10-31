import React from "react";

export const MusicCard = ({ details }) => {
  const { thumbnail, title, artist } = details;
  const artistNames = artist.map((ast) => ast.name);
  console.log("artistNames", artistNames);
  return (
    <section className="music-card-container">
      <img src={thumbnail} alt={title} width={130} height={130} />
      <p className="song-title one-line">{title}</p>
      <p className="song-artist one-line">{artistNames.join(" & ")}</p>
    </section>
  );
};
