import React from "react";

function EventCard() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
        <h1 className="text-xl font-semibold mb-2 text-gray-800">
          Event Title
        </h1>

        <p className="text-gray-600 mb-4">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum.
        </p>

        <div className="flex justify-between items-center">
          <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
            View Details
          </button>

          <span className="text-gray-600">12/12/2024</span>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto">
        <h1 className="text-xl font-semibold mb-2 text-gray-800">
          Event Title
        </h1>

        <p className="text-gray-600 mb-4">
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Vivamus lacinia odio vitae vestibulum.
        </p>

        <div className="flex justify-between items-center">
          <button className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
            View Details
          </button>

          <span className="text-gray-600">12/12/2024</span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
