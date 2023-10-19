"use client";

import React, { useState, useRef } from "react";

const Search = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef();

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setIsExpanded(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center space-x-2">
      <button className="text-sm flex items-center" onClick={() => setIsExpanded(true)}>
      <img className="h-[35%] pr-2" src={"./images/search.png"} />
        Buscar
      </button>
      <input
        ref={inputRef}
        className={`transition-all text-black rounded duration-500 ease-in-out ${
          isExpanded ? "w-64 pl-2" : "w-0"
        } h-8`}
        type="text"
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
};

export default Search;
