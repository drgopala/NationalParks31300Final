import React from "react";
import Carousel from "../components/Carousel";
import LearnMoreModal from "../components/LearnMoreModal";
import parksData from "../data/parksData";
import ToolTip from "../components/TempToolTip";
function Home() {
  return (
    <div className="flex flex-col gap-6 p-4 max-w-6xl mx-auto">
      {/* What Are National Parks Section */}
      <section className="text-center bg-green-600 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-white-700 mb-4">What Are National Parks?</h2>
        <p className="text-white-700">
          National parks are protected areas that preserve the natural beauty,
          wildlife, and cultural heritage of unique landscapes. They are open
          to the public for recreation, education, and inspiration. These parks
          represent the diverse beauty of the world and serve as a reminder of
          the importance of conservation.
        </p>
      </section>

      {/* Learn About National Parks Section */}
      <section className="text-center bg-green-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold text-white-700 mb-4">
          Learn About National Parks
        </h3>
        <LearnMoreModal park={parksData[0]} />
      </section>
      
      {/* Carousel Section */}
      <div>
        <ToolTip content="Use the arrows to navigate through various park images. Click '+' for details.">
            <h2 className="text-3xl font-bold mb-4 text-center p-5 border-solid border-2 border-green-900">Explore National Parks</h2>
        </ToolTip>
        <Carousel parks={parksData} />
      </div>
    </div>
  );
}

export default Home;
