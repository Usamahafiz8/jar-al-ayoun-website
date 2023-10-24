import React, { useState } from "react";

const GetAppointmentForm = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    contactNumber: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="flex justify-center space-x-4">
        <div className="w-1/2 bg-gray-200 p-4">
          <h2 className="text-2xl font-semibold">Ad Section</h2>
        </div>

        <div className="w-1/2 bg-white p-4 rounded-md">
          <h2 className="text-2xl font-semibold pb-4">Get Appointment</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-group">
              <label
                htmlFor="customerName"
                className="text-gray-700 font-semibold"
              >
                Customer Name
              </label>
              <input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="form-group">
              <label
                htmlFor="contactNumber"
                className="text-gray-700 font-semibold"
              >
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="text-gray-700 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div className="form-group">
              <label htmlFor="location" className="text-gray-700 font-semibold">
                Location
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select Location</option>
                <option value="Location 1">Location 1</option>
                <option value="Location 2">Location 2</option>
                <option value="Location 3">Location 3</option>
              </select>
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-red-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetAppointmentForm;
