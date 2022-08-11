import React from "react";
import Toast from "./components/UI/Toast/Toast";
import Users from "./components/Users/Users";

function App() {
  const DUMMY_USERS = [
    {
      id: 'u1',
      username: 'Aaron',
      age: 30 
    },
    {
      id: 'u2',
      username: 'Max',
      age: 35
    },
    {
      id: 'u3',
      username: 'Linnea',
      age: 28
    }
  ]

  return (
    <>
      <Users users={DUMMY_USERS} />
    </>
  );
}

export default App;
