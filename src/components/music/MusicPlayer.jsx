import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeaderWithProjectId } from "../../utils/service";

export const MusicPlayer = () => {
  const { musicId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState({});

  const getMusicDetails = async () => {
    const config = getHeaderWithProjectId();
    try {
      setIsLoading(true);
      const musicData = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song/${musicId}`,
        config
      );
      console.log("musicData", musicData);
      setMusic(musicData.data.data);
    } catch (err) {
      console.log("Error: ", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMusicDetails();
  }, []);

  const getDate = (fullDate) => {
    if(fullDate){
        const date = new Date(fullDate).getDate();
        const month = new Date(fullDate).getMonth();
        const year = new Date(fullDate).getFullYear();
        return `${date}/${month+1}/${year}`
    }

  }

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <section className="music-player-container">
      <h2 className="title">{music.title}</h2>
      <img src={music.thumbnail} alt={music.title} />
      <p>{ music.artist && music.artist.map((el) => el.name).join(' & ')}</p>
      <p>published On: {getDate(music.createdAt)}</p>
    </section>
  );
};
