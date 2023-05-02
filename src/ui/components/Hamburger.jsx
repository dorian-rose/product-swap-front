import React from "react";

export const Hamburger = ({ changePosition, menuPosition }) => {
  console.log(menuPosition);

  return (
    <>
      <button className="text-end me-10" onClick={changePosition}>
        {menuPosition == "block" ? (
          <p>X</p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 m-0 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </>
  );
};
