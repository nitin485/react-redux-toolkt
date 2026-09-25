import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const KLIPY_KEY = import.meta.env.VITE_KLIPY_KEY;

export async function fetchPhotos(query, per_page = 10, page = 3) {
  const res = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query,
      per_page,
      page,
    },
    headers: {
      Authorization: `Client-ID ${UNSPLASH_KEY}`,
    },
  });
    // console.log("media api",res.data);
        // console.log("media qery",query);

  return res.data;
}

// pexels api
// export async function fetchVideos(query, per_page = 10, page = 3) {
//   // const res = await axios.get(`https://api.unsplash.com/search/photos`, {
//   const res = await axios.get(`https://api.pexels.com/videos/search`, {
//     // https://api.pexels.com/videos/searc
//     params: {
//       query,
//       per_page,
//       page,
//     },
//     headers: {
//       Authorization: `Client-ID ${PEXELS_KEY}`,
//     },
//   });
//   return res.data;
//   // console.log(res.data);
// }
// hello world
export async function fetchVideos(query, per_page = 15) {
  console.log("Pexels key exists:", !!PEXELS_KEY);

  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, per_page },
    headers: {
      authorization: PEXELS_KEY,
    },
  });
  // console.log("Pexels response:", res.data);

  return res.data;
}
// export async function fetchVideos(query, per_page = 15) {
//   console.log("Pexels key exists:", !!PEXELS_KEY);

//   const res = await axios.get("https://api.pexels.com/videos/search", {
//     params: {
//       query,
//       per_page,
//     },
//     headers: {
//       Authorization: PEXELS_KEY,
//     },
//   });

//   console.log("Pexels response:", res.data);

//   return res.data;
// }

//? tenor  api
// ! klipy => api

export async function fetchGifs(query, per_page = 15, page = 1) {
  const res = await axios.get(
    `https://api.klipy.com/api/v1/${KLIPY_KEY}/gifs/search`,
    {
      params: { q: query, per_page, page },
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  // console.log("helloresults",res);
  //   console.log("hello",res);
  console.log(res.data);

  return res;
}
