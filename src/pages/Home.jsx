import axios from "axios";
import React, { useEffect, useState } from "react";
import { MusicCard } from "../components/music/MusicCard";
import { getHeaderWithProjectId } from "../utils/service";

// 9sa80czkq1na
export const Home = () => {
  const [musicList, setMusicList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMusicList = async () => {
    const config = getHeaderWithProjectId();
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://academics.newtonschool.co/api/v1/music/song",
        config
      );
      setMusicList(response.data.data);
    } catch (err) {
      console.log("err: ", err);
      //
    } finally {
      setIsLoading(false);
    }
    // setIsLoading(false);
  };

  useEffect(() => {
    getMusicList();
  }, []);

  return (
    <main className="home-container">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <section className="music-list-container">
          {musicList.length > 0 &&
            musicList.map((music) => {
              return <MusicCard details={music} key={music._id}/>;
            })}
        </section>
      )}
    </main>
  );
};

// const config = {
//   method: "POST",
// };
