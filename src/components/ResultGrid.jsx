import { useEffect } from "react";
import { fetchPhotos, fetchGifs, fetchVideos } from "../api/mediaApi";

import { useSelector } from "react-redux";

import {} from // setQuery,
// setLoading,
// setResults,
// setError,
"../redux/features/searchSlice";

// import { useDispatch,useSelector } from 'react-redux'
function ResultGrid() {
  const { activeTab, query } = useSelector((store) => store.search);
  async function getData() {
    let data;

    if (activeTab == "photos") {
      let res = await fetchPhotos(query);
      data = res.results.map((items) => ({
        id: items.id,
        type: "photos",
        title: items.alt_description,
        src: items.urls.full,
        thumbnail: items.urls.thumb,
      }));
      console.log("resultgrid data", data);
    }
    if (activeTab == "videos") {
      let res = await fetchVideos(query);
      data = res.videos.map((items) => ({
        id: items.id,
        type: "videos",
        title: items.user.name || "video",
        src: items.url,
        thumbnail: items.image,
      }));
      console.log("videos is", data);
    }
    if (activeTab == "gif") {
      const res = await fetchGifs(query);

      // console.log("GIF RESPONSE:", res);
      // console.log("GIF DATA:", res.data.data.data);

      data = res.data.data.data.map((items) => {
        console.log("ONE GIF:", items);

        return {
          id: items.id,
          type: "gif",
          title: items.title || "GIF",
          src: items.file.hd.gif.url,
          thumbnail: items.file.hd.jpg.url,
        };
      });

      console.log("gif is", data);
    }
  }

  getData();

  return <div>ResultGrid</div>;
}

export default ResultGrid;
