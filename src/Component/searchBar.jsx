import React, { useEffect, useState } from "react";

const menuData = [
    {
      id: "1",
      name: "One",
      children: [
        {
          id: "1.1",
          name: "One - one",
          children: [
            { id: "1.1.1", name: "One - one - one" },
            { id: "1.1.2", name: "One - one - two" },
            { id: "1.1.3", name: "One - one - three" }
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Two",
      children: [{ id: "2.1", name: "Two - one" }]
    },
    {
      id: "3",
      name: "Three",
      children: [
        {
          id: "3.1",
          name: "Three - one",
          children: [
            {
              id: "3.1.1",
              name: "Three - one - one",
              children: [
                {
                  id: "3.1.1.1",
                  name: "Three - one - one - one",
                  children: [
                    { id: "3.1.1.1.1", name: "Three - one - one - one - one" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { id: "4", name: "Four" },
    {
      id: "5",
      name: "Five",
      children: [
        { id: "5.1", name: "Five - one" },
        { id: "5.2", name: "Five - two" },
        { id: "5.3", name: "Five - three" },
        { id: "5.4", name: "Five - four" }
      ]
    },
    { id: "6", name: "Six" }
  ];


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(menuData);
  }, []);
  // const haschildren = node.children?true: false;

  // const RecursiveComponent = ({ name, items }) => {
  //   const hasChildren = items && items.length

  const handleChange = (checked, user) => {
      console.log(checked, user);
    
      
    // const { name, checked } = e.target;
    // if (name === "1") {
    //   let tempUser = users.map((user) => {
    //     return { ...user, isChecked: checked };
    //   });
    //   setUsers(tempUser);
    // } else {
    //   let tempUser = users.map((user) =>
    //     user.name === name ? { ...user, isChecked: checked } : user
    //   );
    //   setUsers(tempUser);
    // }
  };

  return (
    
      <form >
        <h3>Select Users</h3>
        {users.map((user, item) => (
          <div key={item}>
            <input
              type="checkbox"
              id={user.id}
              // children= {user.children.map(children.id)}
              checked={user?.isChecked || false}
              onChange={({target:{checked}}) =>{handleChange(checked, user)}}
            />
            <label>{user.id}</label>


          </div>
        ))}
      </form>
  );
}

export default App;