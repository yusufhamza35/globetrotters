import React, { useEffect, useState } from "react";

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [startTouch, setStartTouch] = useState(0);
  const total = React.Children.count(children);

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const handleTouchStart = (e) => {
    const touchStart = e.touches[0].clientX;
    setStartTouch(touchStart);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (startTouch - touchEnd > 50) {
      next();
    } else if (touchEnd - startTouch > 50) {
      prev();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden mx-auto h-[640px] md:h-[500px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => (
          <div className="w-full flex-shrink-0">{child}</div>
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute outline-none top-1/2 left-2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white cursor-pointer p-2 rounded-full hover:bg-opacity-70 transition z-20 hidden md:block"
        aria-label="Önceki"
      >
        ◀
      </button>

      <button
        onClick={next}
        className="nextBtn absolute outline-none top-1/2 right-2 -translate-y-1/2 bg-blue-800 bg-opacity-50 text-white cursor-pointer p-2 rounded-full hover:bg-opacity-70 transition z-20 hidden md:block"
        aria-label="Sonraki"
      >
        ▶
      </button>
    </div>
  );
};

export default Carousel;
