"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export const projects = [
  {
    "jobTitle": "Software Engineer",
    "image": "https://img.freepik.com/premium-vector/word-cloud-background-concept-software-engineering-computer-programming-system-cloud-technology-development-application-management-vector-illustration_616200-4829.jpg",
    "jobLocation": "New York, NY",
    "jobDescription": "We are looking for a Software Engineer to join our team. The ideal candidate will have experience with full-stack development and a passion for coding.",
    "requiredSkills": ["JavaScript", "React", "Node.js", "CSS", "HTML"],
    "stipend": "$1000/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Data Analyst",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsHAWp-gx17Q1agxtzNYYpySKye9y_xKfABw&s",
    "jobLocation": "San Francisco, CA",
    "jobDescription": "Seeking a Data Analyst to interpret and analyze complex data sets to help drive business decisions.",
    "requiredSkills": ["SQL", "Excel", "Python", "Tableau"],
    "stipend": "$1200/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "UX/UI Designer",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9IVXq6zMJlw0XechoTc84ydVoMZy8R97ZQ&s",
    "jobLocation": "Austin, TX",
    "jobDescription": "Looking for a creative UX/UI Designer to enhance user experience for our web and mobile applications.",
    "requiredSkills": ["Figma", "Sketch", "Adobe XD", "HTML", "CSS"],
    "stipend": "$1100/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Project Manager",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASjJ6l1fiOMiKDp3hWz9KxbF5h3-J8FORNg&s",
    "jobLocation": "Chicago, IL",
    "jobDescription": "We are seeking a Project Manager to oversee projects from inception to completion, ensuring they are delivered on time and within budget.",
    "requiredSkills": ["Agile", "Scrum", "Communication", "Leadership"],
    "stipend": "$1500/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Marketing Intern",
    "image": "https://media.foundit.in/career-advice/wp-content/uploads/2022/08/Marketing-Intern-job-description.jpg",
    "jobLocation": "Los Angeles, CA",
    "jobDescription": "Join our marketing team as an intern to assist in creating and implementing marketing strategies.",
    "requiredSkills": ["Social Media", "Content Creation", "SEO", "Analytics"],
    "stipend": "$800/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "DevOps Engineer",
    "image": "https://cdn.educba.com/academy/wp-content/uploads/2019/11/DevOps-Engineer.jpg",
    "jobLocation": "Seattle, WA",
    "jobDescription": "Looking for a skilled DevOps Engineer to manage and optimize our cloud infrastructure.",
    "requiredSkills": ["Docker", "Kubernetes", "AWS", "CI/CD"],
    "stipend": "$1400/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Graphic Designer",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8FVkfCVQk_eEH19SjtNRXzWpWpHquroB3zA&s",
    "jobLocation": "Miami, FL",
    "jobDescription": "We are in need of a Graphic Designer to create visually stunning designs for our marketing materials.",
    "requiredSkills": ["Photoshop", "Illustrator", "Creativity", "Typography"],
    "stipend": "$1000/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Content Writer",
    "image": "https://www.sincera.in/wp-content/uploads/2016/12/Content-Writing.jpg",
    "jobLocation": "Boston, MA",
    "jobDescription": "Join our team as a Content Writer to create engaging articles and blog posts for our website.",
    "requiredSkills": ["Writing", "Research", "SEO", "Creativity"],
    "stipend": "$900/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Sales Representative",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMUrupmrlyEgwRQk1i6T7MqnV7xfuMRPOsg&s",
    "jobLocation": "Houston, TX",
    "jobDescription": "Seeking a Sales Representative to drive sales and build relationships with clients.",
    "requiredSkills": ["Communication", "Negotiation", "Customer Service"],
    "stipend": "$1100/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  },
  {
    "jobTitle": "Network Administrator",
    "image": "https://wcc.ca/wp-content/uploads/2024/03/wcc-blog-What-is-the-skill-required-for-network-administrator.jpg",
    "jobLocation": "Phoenix, AZ",
    "jobDescription": "Looking for a Network Administrator to manage and support our network infrastructure.",
    "requiredSkills": ["Networking", "Cisco", "Firewall", "Troubleshooting"],
    "stipend": "$1300/month",
    "moreDetailsLink": "/jobs-available/apply-for-jobs"
  }
]


function JobsCollection() {
  return (
    <div className="max-w-10xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  )
}

export default JobsCollection

