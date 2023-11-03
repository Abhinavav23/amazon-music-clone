import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getHeaderWithProjectId } from "../../utils/service";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";

const playPauseButtonStyle = {
  display: "flex",
  gap: "0.5rem",
  padding: "0.5rem",
  borderRadius: "1rem",
};

export const MusicPlayer = () => {
  const { musicId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [music, setMusic] = useState({});
  const audioRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  const getMusicDetails = async () => {
    const config = getHeaderWithProjectId();
    try {
      setIsLoading(true);
      const musicData = await axios.get(
        `https://academics.newtonschool.co/api/v1/music/song/${musicId}`,
        config
      );
      console.log("musicData", musicData.data.data);
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
    if (fullDate) {
      const date = new Date(fullDate).getDate();
      const month = new Date(fullDate).getMonth();
      const year = new Date(fullDate).getFullYear();
      return `${date}/${month + 1}/${year}`;
    }
  };

  const playOrPause = () => {
    console.log("audioRef.current", audioRef.current);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setDuration(audioRef.current.duration)
  };

  useEffect(() => {
    if(audioRef.current){
        console.log("audioRef.current.duration", audioRef.current.duration);
    }
  }, [audioRef])

  return isLoading ? (
    <div>Loading ...</div>
  ) : (
    <section className="music-player-container">
      <h2 className="title">{music.title}</h2>
      <img src={music.thumbnail} alt={music.title} />
      <p>{music.artist && music.artist.map((el) => el.name).join(" & ")}</p>
      <p>published On: {getDate(music.createdAt)}</p>

      <audio src={music.audio_url} ref={audioRef} />
      <section className="music-Player" >
        <button onClick={playOrPause}>
          {isPlaying ? (
            <aside style={playPauseButtonStyle}>
              <FontAwesomeIcon icon={faPause} />
              <p>Pause</p>
            </aside>
          ) : (
            <aside style={playPauseButtonStyle}>
              <FontAwesomeIcon icon={faPlay} />
              <p>Play</p>
            </aside>
          )}
        </button>
        {/* <span>start - </span> 
        <span>End - </span> */}

        <div>Duration: {duration}</div>
      </section>
    </section>
  );
};

// HTML Media tags
// audio
// video
