import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobs = [
    {
      img: "https://cdn-icons-png.flaticon.com/128/10096/10096351.png",
      company: "Amazon",
      updated: "5 days ago",
      designation: "Senior UI/UX Designer",
      jobtype: "Part-time",
      post: "Senior level",
      fee: "$120/hr",
      location: "San Francisco, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
      company: "Google",
      updated: "30 days ago",
      designation: "Graphic Designer",
      jobtype: "Full-time",
      post: "Flexible schedule",
      fee: "$150-220K",
      location: "Mountain View, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4401/4401391.png",
      company: "Dribble",
      updated: "18 days ago",
      designation: "Senior Motion Designer",
      jobtype: "Contract",
      post: "Remote",
      fee: "$85/hr",
      location: "San Francisco, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
      company: "Meta",
      updated: "3 months ago",
      designation: "UI/UX Designer",
      jobtype: "Full-time",
      post: "In office",
      fee: "$200-250k",
      location: "New York, NY",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/4494/4494647.png",
      company: "Airbnb",
      updated: "1 days ago",
      designation: "Junior UI/UX Designer",
      jobtype: "Contract",
      post: "Remote",
      fee: "$100/hr",
      location: "San Francisco, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/2175/2175370.png",
      company: "Apple",
      updated: "4 days ago",
      designation: "Graphic Designer",
      jobtype: "Full-time",
      post: "Flexible schedule",
      fee: "$85-120k",
      location: "Cupertino, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/732/732228.png", // Netflix
      company: "Netflix",
      updated: "2 days ago",
      designation: "Product Designer",
      jobtype: "Full-time",
      post: "Mid level",
      fee: "$180-210k",
      location: "Los Angeles, CA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/732/732221.png", // Microsoft
      company: "Microsoft",
      updated: "10 days ago",
      designation: "UX Researcher",
      jobtype: "Full-time",
      post: "Senior level",
      fee: "$160-190k",
      location: "Seattle, WA",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/2111/2111624.png", // Spotify
      company: "Spotify",
      updated: "7 days ago",
      designation: "UI Designer",
      jobtype: "Contract",
      post: "Remote",
      fee: "$95/hr",
      location: "Stockholm, Sweden",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/5968/5968371.png", // Tesla
      company: "Tesla",
      updated: "12 days ago",
      designation: "Visual Designer",
      jobtype: "Full-time",
      post: "In office",
      fee: "$140-175k",
      location: "Austin, TX",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/732/732238.png", // Adobe
      company: "Adobe",
      updated: "4 days ago",
      designation: "Interaction Designer",
      jobtype: "Full-time",
      post: "Flexible schedule",
      fee: "$130-160k",
      location: "San Jose, CA",
    },
  ];

  return (
    <div className="card-container">
      {jobs.map((job, index) => (
        <Card
          key={index}
          img={job.img}
          company={job.company}
          updated={job.updated}
          designation={job.designation}
          jobtype={job.jobtype}
          post={job.post}
          fee={job.fee}
          location={job.location}
        />
      ))}
    </div>
  );
};


export default App;
