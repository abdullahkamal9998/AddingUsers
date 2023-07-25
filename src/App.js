import React, { useState } from "react";
import NewUser from "./Components/NewUser";
import UserForm from "./Components/UserForm";
import Users from "./Components/Users";
function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [Userss, setUserss] = useState([]);
  const onEditing = () => {
    setIsEditing(true);
  };

  const onCancelEditing = () => {
    setIsEditing(false);
  };

  const getUserData = (user) => {
    setUserss((prevState) => {
      return [user, ...prevState];
    });
    // console.log("user", user);
    // console.log("USer Data", Users);
  };
  return (
    <div>
      {!isEditing && <NewUser onEditing={onEditing}></NewUser>}
      {isEditing && (
        <UserForm
          onSaveUser={getUserData}
          onCancelEditing={onCancelEditing}
        ></UserForm>
      )}
      {Userss.length > 0 && <Users users={Userss}></Users>}
    </div>
  );
}

export default App;
