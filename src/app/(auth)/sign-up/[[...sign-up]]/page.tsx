'use client';

import { SignUp } from '@clerk/nextjs';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RoleBasedSignUp() {
  const [step, setStep] = useState(1); // Tracks the current step
  const [role, setRole] = useState<string | null>(null); // Tracks the selected role
  const [userDetails, setUserDetails] = useState<Record<string, any>>({});
  const router = useRouter();

  // Handle user inputs
  const handleInputChange = (field: string, value: string) => {
    setUserDetails((prev) => ({ ...prev, [field]: value }));
  };

  // Handle role selection
  const handleRoleSelection = (selectedRole: string) => {
    setRole(selectedRole);
    setStep(3); // Proceed to the custom form step
  };

  // Submit final form
  const handleSubmit = () => {
    const finalDetails = { ...userDetails, role };
    console.log('Final User Details:', finalDetails);

    // Redirect based on the role
    if (role === 'student') {
      router.push('/dashboard');
    } else if (role === 'company') {
      router.push('/company');
    } else {
      alert('Role selection is required!');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      {step === 1 && (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Step 1: Account Details</h2>
          <SignUp
            // @ts-ignore
            onSignUp={(user: any) => {
              setUserDetails({ email: user.email }); // Collect email during sign-up
              setStep(2); // Proceed to role selection
            }}
          />
        </div>
      )}

      {step === 2 && (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Step 2: Select Your Role</h2>
          <div className="space-y-4">
            <button
              onClick={() => handleRoleSelection('student')}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              I'm a Student
            </button>
            <button
              onClick={() => handleRoleSelection('company')}
              className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
            >
              I'm a Company
            </button>
          </div>
        </div>
      )}

      {step === 3 && role === 'student' && (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Step 3: Student Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
              <input
                type="text"
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Degree Program</label>
              <input
                type="text"
                onChange={(e) => handleInputChange('degree', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
            >
              Complete Sign Up
            </button>
          </form>
        </div>
      )}

      {step === 3 && role === 'company' && (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Step 3: Company Details</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
              <input
                type="text"
                onChange={(e) => handleInputChange('companyName', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">Industry</label>
              <input
                type="text"
                onChange={(e) => handleInputChange('industry', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
            >
              Complete Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
}