import React from "react";

const Search = (props) => {
  return (
    <div className="user-inputs">
      <select
        defaultValue="Sort"
        className="searchbar"
        onChange={props.handleSort}
      >
        <option disabled value="Sort">
          Sort
        </option>
        <option value="Higher Rating">Higher Rating</option>
        <option value="Lowest Rating">Lowest Rating</option>
      </select>
    </div>
  );
};

export default Search;
