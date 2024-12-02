import React, { useState } from "react";

const LearnMoreModal = ({ park }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold">Showcase Today: {park.name}</h3>
      <button
        onClick={handleOpenModal}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-600"
      >
        Learn More
      </button>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white p-6 rounded shadow-lg max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h4 className="text-xl font-bold mb-2">
                <a href={park.website} className="text-xl font-bold text-blue-500 hover:underline">
                     More About {park.name}
                </a>
            </h4>
            <p>{park.moreInfo}</p>
            <button
              onClick={handleCloseModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LearnMoreModal;
