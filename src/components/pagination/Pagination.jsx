import React, { useEffect, useState } from "react";
import "./Pagination.css";

const Pagination = ({ current, handleClick, totalPages }) => {
  const [currentRange, setCurrentRange] = useState({
    start: current,
    end: Math.min(current + 4, totalPages),
  });

  const handlePrevRange = () => {
    setCurrentRange((prevRange) => ({
      start: Math.max(prevRange.start - 5, 1),
      end: Math.max(prevRange.end - 5, 5),
    }));
  };
  useEffect(() => {
    const newStart = Math.floor((current - 1) / 5) * 5 + 1;
    const newEnd = Math.min(newStart + 4, totalPages);
    setCurrentRange({ start: newStart, end: newEnd });
  }, [current, totalPages]);

  const handleNextRange = () => {
    setCurrentRange((prevRange) => ({
      start: Math.min(prevRange.start + 5, totalPages - 4),
      end: Math.min(prevRange.end + 5, totalPages),
    }));
  };

  return (
    <>
      <div className="pagination">
        <button
          onClick={handlePrevRange}
          disabled={currentRange.start === 1}
          className="pagination-arrow"
        >
          &lt;
        </button>

        {[...Array(currentRange.end - currentRange.start + 1).keys()].map(
          (num) => (
            <button
              key={currentRange.start + num}
              onClick={() => handleClick(currentRange.start + num)}
              className={`pagination-button ${
                current === currentRange.start + num ? "active" : ""
              }`}
            >
              {currentRange.start + num}
            </button>
          )
        )}
        <button
          onClick={handleNextRange}
          disabled={currentRange.end === totalPages}
          className="pagination-arrow"
        >
          &gt;
        </button>
      </div>
    </>
  );
};

export default Pagination;
