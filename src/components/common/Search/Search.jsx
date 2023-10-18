'use client'

import React, { useState, useRef } from 'react';

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
    <div>
      <button onClick={() => setIsExpanded(true)}>Buscar</button>
      <input
        ref={inputRef}
        className={`transition-all duration-500 ease-in-out ${isExpanded ? 'w-64' : 'w-0'} h-8`}
        type="text"
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
};

export default Search;
