import React, { useEffect, useState } from "react";
import "./Tree.css"
const userData = [
  { id: "0.1" ,
  children: [
    {
       id: "0.1.1"
    },
  ],
},
  { id: "0.2" },
  { id: "0.3" },
  { id: "0.4" },
  { id: "0.5" }
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (id === "0") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.id === id ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };

  return (
      <form>
        <h3>Select Users</h3>
        <div className="Parent">
          <input
            type="checkbox"
            id="0"
            checked={!users.some((user) => user?.isChecked !== true)}
            onChange={handleChange}
          />
          <label>All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="Child" key={index}>
            <input
              type="checkbox"
              id={user.id}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label>{user.id}</label>
          </div>
        ))}
      </form>
      
  );
}

export default App;