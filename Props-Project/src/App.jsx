import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="card-container">
      <Card
        img="https://cdn-icons-png.flaticon.com/128/10096/10096351.png"
        company="Amazon"
        updated="5 days ago"
        designation="Senior UI/UX Designer"
        jobtype="Part-time"
        post="Senior level"
        fee="$120/hr"
        location="San Francisco, CA"
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/300/300221.png"
        company="Google"
        updated="30 days ago"
        designation="Graphic Designer"
        jobtype="Full-time"
        post="Flexible schedule"
        fee="$150-220K"
        location="Mountain View, CA"
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/4401/4401391.png"
        company="Dribble"
        updated="18 days ago"
        designation="Senior Motion Designer"
        jobtype="Contract"
        post="Remote"
        fee="$85/hr"
        location="San Francisco, CA"
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/6033/6033716.png"
        company="Meta"
        updated="3 months ago"
        designation="UI/UX Designer"
        jobtype="Full-time"
        post="In office"
        fee="$200-250k"
        location="New York, NY"
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/4494/4494647.png"
        company="Airbnb"
        updated="1 days ago"
        designation="junior UI/UX Designer"
        jobtype="Contract"
        post="Remote"
        fee="$100/hr"
        location="San Francisco, CA"
      />
      <Card
        img="https://cdn-icons-png.flaticon.com/128/2175/2175370.png"
        company="Apple"
        updated="4 days ago"
        designation="Graphic Designer"
        jobtype="Full-time"
        post="Flexible schedule"
        fee="$85-120k"
        location="Cupertino, CA"
      />
    </div>
  );
};

export default App;
