"use client"
import React, { FormEvent, useState } from "react";

interface Student {
  studentName: string;
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  collegeClub: string[];
  collegeEmail: string;
  resumeData?: ResumeData;
  isAlumni: boolean;
}

interface ResumeData {
  resumeLink: string;
  skills: string[];
  projects: string[];
  education: string[];
  certifications: string[];
  awards: string[];
  isInterned: boolean;
}

const ProfileForm: React.FC = () => {
  const [studentData, setStudentData] = useState<Student>({
    studentName: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    collegeClub: ["Coding Club", "AI Society"],
    collegeEmail: "johndoe@college.edu",
    isAlumni: false,
    resumeData: {
      resumeLink: "https://example.com/resume.pdf",
      skills: ["React", "Node.js", "TypeScript"],
      projects: ["Crowdfunding Platform", "Chatbot System"],
      education: ["B.Tech in Computer Science"],
      certifications: ["AWS Certified Developer", "Google AI"],
      awards: ["Hackathon Winner 2023"],
      isInterned: true,
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    try {
      const formData = new FormData(event.target as HTMLFormElement);
      console.log(formData);
      
      const userData = Object.fromEntries(formData.entries());
      console.log(userData);
      
  
      // Make a POST request to your API endpoint
      fetch('http://localhost:3000/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => console.log('API response:', data))
        .catch((error) => console.error('API error:', error));
    } catch (error) {
      console.log("error collecting data of user",error);
      throw new Error("error collecting data of user");
    }
    
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* View Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <p><strong>Name:</strong> {studentData.studentName}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p>
          {studentData.linkedin && <p><strong>LinkedIn:</strong> <a href={studentData.linkedin} className="text-blue-400 underline">{studentData.linkedin}</a></p>}
          {studentData.github && <p><strong>GitHub:</strong> <a href={studentData.github} className="text-blue-400 underline">{studentData.github}</a></p>}
          <p><strong>College Clubs:</strong> {studentData.collegeClub.join(", ")}</p>
          <p><strong>College Email:</strong> {studentData.collegeEmail}</p>
          {studentData.resumeData && (
            <div>
              <h3 className="text-xl font-semibold mt-4">Resume Details</h3>
              <p><strong>Resume Link:</strong> <a href={studentData.resumeData.resumeLink} className="text-blue-400 underline">{studentData.resumeData.resumeLink}</a></p>
              <p><strong>Skills:</strong> {studentData.resumeData.skills.join(", ")}</p>
              <p><strong>Projects:</strong> {studentData.resumeData.projects.join(", ")}</p>
              <p><strong>Education:</strong> {studentData.resumeData.education.join(", ")}</p>
              <p><strong>Certifications:</strong> {studentData.resumeData.certifications.join(", ")}</p>
              <p><strong>Awards:</strong> {studentData.resumeData.awards.join(", ")}</p>
              <p><strong>Internship Status:</strong> {studentData.resumeData.isInterned ? "Yes" : "No"}</p>
            </div>
          )}
        </div>

        {/* Edit Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="studentName" className="block mb-2">Name</label>
              <input
                type="text"
                id="studentName"
                name="studentName"
                value={studentData.studentName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={studentData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={studentData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="linkedin" className="block mb-2">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={studentData.linkedin || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="github" className="block mb-2">GitHub</label>
              <input
                type="url"
                id="github"
                name="github"
                value={studentData.github || ""}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="collegeClub" className="block mb-2">College Clubs</label>
              <input
                type="text"
                id="collegeClub"
                name="collegeClub"
                value={studentData.collegeClub.join(", ")}
                onChange={(e) =>
                  setStudentData({
                    ...studentData,
                    collegeClub: e.target.value.split(","),
                  })
                }
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="collegeEmail" className="block mb-2">College Email</label>
              <input
                type="email"
                id="collegeEmail"
                name="collegeEmail"
                value={studentData.collegeEmail}
                onChange={handleInputChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500"
              
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;



