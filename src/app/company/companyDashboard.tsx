"use client";
import React, { useState, useId, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

function CompanyDashboard() {
  const [active, setActive] = useState<(typeof applications)[number] | null>(null);
  const [isEditing, setIsEditing] = useState(false); // for company info editing
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
        setIsEditing(false);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => {
    setActive(null);
    setIsEditing(false);
  });

  const handleSaveCompanyInfo = () => {
    setIsEditing(false);
    // Save logic here
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-neutral-200 mb-6">Company Dashboard</h2>

      {/* Company Information Section */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        {isEditing ? (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              defaultValue="Company Name"
              className="p-2 rounded bg-gray-700 text-white"
            />
            <textarea
              defaultValue="Company description goes here..."
              className="p-2 rounded bg-gray-700 text-white"
            />
            <div className="flex gap-4">
              <button
                onClick={handleSaveCompanyInfo}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="text-neutral-200">
            <h3 className="text-lg font-semibold">Company Name</h3>
            <p className="mt-2">Company description goes here...</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            >
              Edit Information
            </button>
          </div>
        )}
      </div>

      {/* Student Application Section */}
      <h3 className="text-xl font-semibold text-neutral-200 mb-4">Student Applications</h3>
      <div className="flex flex-wrap gap-4">
        {applications.map((application) => (
          <motion.div
            key={application.title}
            layoutId={`app-${application.title}-${id}`}
            onClick={() => setActive(application)}
            className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer w-full max-w-[500px]"
          >
            <div className="flex items-center gap-4">
              <Image
                width={100}
                height={100}
                src={application.src}
                alt={application.title}
                className="h-24 w-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="text-neutral-200 font-semibold">{application.title}</h4>
                <p className="text-neutral-400">{application.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Accepting/Rejecting Applications */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-10"
          >
            <motion.div
              ref={ref}
              layoutId={`app-${active.title}-${id}`}
              className="p-6 bg-gray-800 rounded-lg max-w-lg w-full text-neutral-200"
            >
              <h4 className="text-xl font-semibold mb-4">{active.title}</h4>
              <p className="mb-4">{active.description}</p>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
                  onClick={() => setActive(null)}
                >
                  Accept
                </button>
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500"
                  onClick={() => setActive(null)}
                >
                  Reject
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const applications = [
  {
    title: "John Doe",
    description: "A computer science student specializing in web development.",
    src: "",
  },
  {
    title: "Jane Smith",
    description: "A data science enthusiast with hands-on experience in ML and AI.",
    src: "/path-to-jane-image.jpg",
  },
  // More applications...
];

export default CompanyDashboard;
