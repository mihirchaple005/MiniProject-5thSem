"use client";
import React, { useState } from "react";

function CreateNewHiring() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    openings: "",
    dueDate: "",
    jobDescription: "",
    skillsRequired: "",
    eligibility: "",
    experienceLevel: "",
    salaryRange: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Logic to submit the form data to the backend server here
    alert("New hiring post created!");
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-neutral-200 mb-6">Create New Hiring Post</h2>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg space-y-4">
        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Title/Role
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Number of Openings */}
        <div>
          <label htmlFor="openings" className="block text-sm font-medium text-neutral-300 mb-2">
            Number of Openings
          </label>
          <input
            type="number"
            id="openings"
            name="openings"
            value={formData.openings}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Due Date */}
        <div>
          <label htmlFor="dueDate" className="block text-sm font-medium text-neutral-300 mb-2">
            Due Date (Last date to apply)
          </label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Job Description */}
        <div>
          <label htmlFor="jobDescription" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Description
          </label>
          <textarea
            id="jobDescription"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows={4}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Skills Required */}
        <div>
          <label htmlFor="skillsRequired" className="block text-sm font-medium text-neutral-300 mb-2">
            Skills Required (Prerequisites)
          </label>
          <input
            type="text"
            id="skillsRequired"
            name="skillsRequired"
            value={formData.skillsRequired}
            onChange={handleChange}
            required
            placeholder="E.g. JavaScript, React, Python, etc."
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Eligibility Criteria */}
        <div>
          <label htmlFor="eligibility" className="block text-sm font-medium text-neutral-300 mb-2">
            Eligibility Criteria
          </label>
          <input
            type="text"
            id="eligibility"
            name="eligibility"
            value={formData.eligibility}
            onChange={handleChange}
            required
            placeholder="E.g. Minimum CGPA, department, etc."
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Experience Level */}
        <div>
          <label htmlFor="experienceLevel" className="block text-sm font-medium text-neutral-300 mb-2">
            Experience Level (If applicable)
          </label>
          <input
            type="text"
            id="experienceLevel"
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleChange}
            placeholder="E.g. Entry-level, Mid-level, Senior"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Salary Range */}
        <div>
          <label htmlFor="salaryRange" className="block text-sm font-medium text-neutral-300 mb-2">
            Salary Range (Optional)
          </label>
          <input
            type="text"
            id="salaryRange"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            placeholder="E.g. $50,000 - $70,000 per annum"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="E.g. Remote, New York, etc."
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            Create Hiring Post
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewHiring;
