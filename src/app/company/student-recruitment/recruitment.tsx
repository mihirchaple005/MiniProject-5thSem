"use client";
import React, { useState } from "react";
import { createJobForNewHiring } from "../../../../prisma/JobForNewHirings";

async function CreateNewHiring() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    jobType: "",
    jobDescription: "",
    requiredSkills: "",
    stipend: "",
    moreDetailsLink: "",
    companyId: "", // Assuming you'll pass this as part of the form
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
    createJobForNewHiring(formData.jobTitle, 
      formData.jobLocation, 
      formData.jobType, 
      formData.jobDescription, 
      formData.requiredSkills.split(","), 
      formData.stipend, 
      formData.moreDetailsLink, 
      ).then((res) => console.log(res));


    alert("New hiring post created!");
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-neutral-200 mb-6">Create New Hiring Post</h2>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg space-y-4">
        {/* Job Title */}
        <div>
          <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Title
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

        {/* Job Location */}
        <div>
          <label htmlFor="jobLocation" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Location
          </label>
          <input
            type="text"
            id="jobLocation"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Job Type */}
        <div>
          <label htmlFor="jobType" className="block text-sm font-medium text-neutral-300 mb-2">
            Job Type (e.g., Full-time, Part-time, Internship)
          </label>
          <input
            type="text"
            id="jobType"
            name="jobType"
            value={formData.jobType}
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

        {/* Required Skills */}
        <div>
          <label htmlFor="requiredSkills" className="block text-sm font-medium text-neutral-300 mb-2">
            Required Skills
          </label>
          <input
            type="text"
            id="requiredSkills"
            name="requiredSkills"
            value={formData.requiredSkills}
            onChange={handleChange}
            required
            placeholder="E.g. JavaScript, React, Python, etc."
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Stipend */}
        <div>
          <label htmlFor="stipend" className="block text-sm font-medium text-neutral-300 mb-2">
            Stipend
          </label>
          <input
            type="text"
            id="stipend"
            name="stipend"
            value={formData.stipend}
            onChange={handleChange}
            placeholder="E.g. 50000 INR/month"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* More Details Link */}
        <div>
          <label htmlFor="moreDetailsLink" className="block text-sm font-medium text-neutral-300 mb-2">
            More Details Link
          </label>
          <input
            type="url"
            id="moreDetailsLink"
            name="moreDetailsLink"
            value={formData.moreDetailsLink}
            onChange={handleChange}
            placeholder="E.g. https://company-website.com"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Company ID */}
        <div>
          <label htmlFor="companyId" className="block text-sm font-medium text-neutral-300 mb-2">
            Company ID (Optional)
          </label>
          <input
            type="text"
            id="companyId"
            name="companyId"
            value={formData.companyId}
            onChange={handleChange}
            placeholder="Company ID"
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
