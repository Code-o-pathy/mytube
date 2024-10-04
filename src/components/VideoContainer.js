import React, { useEffect, useState } from "react";
import { GOOGLE_SEARCH_API, YOUTUBE_API } from "../utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setvideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch/" + video.id}>
          <VideoCard data={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
