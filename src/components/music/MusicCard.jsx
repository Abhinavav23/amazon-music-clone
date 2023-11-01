import React from "react";

export const MusicCard = ({ details }) => {
  const { thumbnail, title, artist } = details;
  const artistNames = artist.map((ast) => ast.name).join(" & ");
  return (
    <section className="music-card-container">
      <img src={thumbnail} alt={title} width={150} height={150} />
      <p className="title one-line" title={title}>
        {title}
      </p>
      <p className="subtitle one-line" title={artistNames}>
        {artistNames}
      </p>
    </section>
  );
};
