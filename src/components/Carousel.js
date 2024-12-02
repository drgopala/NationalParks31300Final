import React, { useState } from "react";
import Accordion from "./Accordion";

const Carousel = ({ parks }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Navigate to the next image
  const handleNext = () => {
    setIsAccordionOpen(false); // Close the accordion when switching parks
    setCurrentIndex((prevIndex) => (prevIndex + 1) % parks.length);
  };

  // Navigate to the previous image
  const handlePrev = () => {
    setIsAccordionOpen(false); // Close the accordion when switching parks
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? parks.length - 1 : prevIndex - 1
    );
  };

  const currentPark = parks[currentIndex];

  return (
    <div className="carousel-container">
      {/* Carousel */}
      <div className="relative">
        <img
          src={currentPark.image}
          alt={currentPark.name}
          className="rounded-lg shadow-lg"
        />
        <h2 className="text-xl font-bold mt-4">{currentPark.name}</h2>
        {/* Navigation buttons */}
        <div className="flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
          <button
            className="bg-white-700 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={handlePrev}
          >
            ◀
          </button>
          <button
            className="bg-white-700 text-white p-2 rounded-full hover:bg-gray-800"
            onClick={handleNext}
          >
            ▶
          </button>
        </div>
      </div>

      {/* Accordion */}
      <div className="mt-6">
        <Accordion
          title="Park Details"
          content={
            <div>
              <p>
                <strong>Location:</strong> {currentPark.details.location}
              </p>
              <p>
                <strong>Established:</strong> {currentPark.details.established}
              </p>
              <p>
                <strong>Notable Features:</strong> {currentPark.details.features}
              </p>
            </div>
          }
          isOpen={isAccordionOpen}
          setIsOpen={setIsAccordionOpen}
        />
      </div>
    </div>
  );
};

export default Carousel;
