import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { search } = useSelector((state) => state.filter);
  const [input, setInput] = useState(search);

  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searched(input));

    // if user is not in home page, redircet to home page
    if (!match) {
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
