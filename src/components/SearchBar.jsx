import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setQuery } from "../redux/features/searchSlice";

export const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the search logic here, e.g., dispatch an action or call an API

    // console.log("Searching for:", text);
    dispatch(setQuery(text)); // Dispatch the search query to the Redux store

    setText(""); // Clear the input after submission
  };

  return (
    <form
      className="flex items-center justify-center w-full h-12 bg-gray-200 rounded-lg "
      onSubmit={handleSubmit}
      
    >
      <input
        type="text"
        required
        placeholder="Search..."
        className="flex-grow px-4 py-2 text-gray-700 bg-gray-200 rounded-l-lg focus:outline-none"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-blue-500 rounded-r-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};
