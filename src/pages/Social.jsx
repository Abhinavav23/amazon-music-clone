import axios from "axios";
import React, { useEffect, useState } from "react";
import { getHeaderWithProjectId } from "../utils/service";
import { Post } from "../components/post/Post";

export const Social = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const config = getHeaderWithProjectId();
    try {
        setIsLoading(true)
      const res = await axios.get(
        "https://academics.newtonschool.co/api/v1/quora/post?limit=100",
        config
      );
      console.log("posts", res.data.data);
      setPosts(res.data.data)
    } catch (err) {
      console.log(err);
    }finally{
        setIsLoading(false)
    }
  };
  useEffect(() => {
    getPosts();
  }, []);
  return isLoading ? <div>Loading ...</div> : <section className="social-container">
    {
        posts.length > 0 && posts.map((post) => {
            return <Post data={post} key={post._id}/>
        })
    }
  </section>;
};
