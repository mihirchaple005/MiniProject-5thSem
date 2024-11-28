"use client";
import React, { useState } from "react";

function StudentJobApplicationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    experienceYears: "",
    skills: "",
    projects: "",
    githubLink: "",
    resume: null as File | null,
    gpa: "",
    education: "",
    availability: "",
    company: "",  // Removed the auto-fill, will be entered manually
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({
      ...formData,
      resume: file,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
    alert("Application submitted successfully!");
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 p-6">
      <h2 className="text-2xl font-bold text-neutral-200 mb-6">Apply for a Job</h2>

      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg space-y-4">
        {/* Student Name */}
        <div>
          <label htmlFor="studentName" className="block text-sm font-medium text-neutral-300 mb-2">
            Student Name
          </label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Company (Manual Input) */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Years of Experience */}
        <div>
          <label htmlFor="experienceYears" className="block text-sm font-medium text-neutral-300 mb-2">
            Years of Experience
          </label>
          <input
            type="number"
            id="experienceYears"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
            min="0"
          />
        </div>

        {/* Skills */}
        <div>
          <label htmlFor="skills" className="block text-sm font-medium text-neutral-300 mb-2">
            Skills (comma-separated)
          </label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Projects */}
        <div>
          <label htmlFor="projects" className="block text-sm font-medium text-neutral-300 mb-2">
            Projects
          </label>
          <textarea
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
            rows={3}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* GitHub Link */}
        <div>
          <label htmlFor="githubLink" className="block text-sm font-medium text-neutral-300 mb-2">
            GitHub Link (Optional)
          </label>
          <input
            type="url"
            id="githubLink"
            name="githubLink"
            value={formData.githubLink}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* GPA */}
        <div>
          <label htmlFor="gpa" className="block text-sm font-medium text-neutral-300 mb-2">
            GPA
          </label>
          <input
            type="number"
            id="gpa"
            name="gpa"
            value={formData.gpa}
            onChange={handleChange}
            required
            min="0"
            max="10"
            step="0.1"
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-neutral-300 mb-2">
            Educational Qualification
          </label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Availability */}
        <div>
          <label htmlFor="availability" className="block text-sm font-medium text-neutral-300 mb-2">
            Availability to Join
          </label>
          <input
            type="date"
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Resume Upload */}
        <div>
          <label htmlFor="resume" className="block text-sm font-medium text-neutral-300 mb-2">
            Upload Resume (PDF only)
          </label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full p-2 bg-gray-700 text-white rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentJobApplicationForm;
