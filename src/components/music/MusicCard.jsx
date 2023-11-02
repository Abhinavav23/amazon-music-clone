import React from "react";
import { useNavigate } from "react-router-dom";

export const MusicCard = ({ details }) => {
  const { thumbnail, title, artist, _id } = details;
  const artistNames = artist.map((ast) => ast.name).join(" & ");
  const navigate = useNavigate();
  
  const playMusic = () => {
    navigate(`/play/${_id}`);
  };

  return (
    <section className="music-card-container" onClick={playMusic}>
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
