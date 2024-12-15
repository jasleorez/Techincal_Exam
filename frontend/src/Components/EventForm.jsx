import React, { useState } from "react";

const EventForm = ({ initialEvent = {}, onSubmit, onDelete }) => {
  const [formData, setFormData] = useState(initialEvent);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    onDelete(formData);
    setShowDeleteModal(false);
  };

  return (
    <div className="flex flex-wrap min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 text-white p-4 w-64">
        <h2 className="text-xl font-semibold mb-4">Event Form</h2>
        <input
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          placeholder="Event Name"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />
        <textarea
          name="description"
          value={formData.description || ""}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />
        <input
          type="date"
          name="date"
          value={formData.date || ""}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
        />
        <div className="flex justify-between">
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-400"
          >
            Delete
          </button>
          <button
            onClick={() => onSubmit(formData)}
            className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-400"
          >
            Save
          </button>
        </div>
      </div>

      {/* Preview Section */}
      <div className="flex-1 p-4 bg-gray-100">
        <h2 className="text-xl font-semibold mb-4">Event Preview</h2>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-bold">{formData.name || "Event Name"}</h3>
          <p className="text-gray-600">
            {formData.description || "Event description will appear here."}
          </p>
          <p className="text-gray-500 mt-2">
            {formData.date ? `Date: ${formData.date}` : "Event date not set."}
          </p>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg">
              Are you sure you want to delete this event?
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-400"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventForm;
