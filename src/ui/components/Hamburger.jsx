/**
 *
 * @param {Object} param0 destructured: changePosition, menuPosition. ChangePosition is a function that changes value of menuPosition, which provides a class to conceal or reveal the menu.
 * @returns jsx of "hamburger" button
 */
export const Hamburger = ({ changePosition, menuPosition }) => {
  return (
    <>
      <button className="text-end ms-3  me-7" onClick={changePosition}>
        {menuPosition == "block" ? (
          <p>X</p>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="teal"
            className="w-8 h-6 m-0 inline"
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
