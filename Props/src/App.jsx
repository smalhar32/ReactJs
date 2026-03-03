import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="card-container">
      <Card
        user="Shivam"
        age={24}
        img="https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Sarthak"
        age={25}
        img="https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Aditya"
        age={35}
        img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;
