const Users = (props) => {
  return (
    <div
      style={{
        width: "60%",
        margin: "1rem auto",
        textAlign: "left",
        padding: "1rem",
        background: "#ccc",
      }}
    >
      {props.users.map((user, index) => (
        <div
          style={{
            padding: "0.5rem",
            border: "2px solid black",
            margin: "1rem",
            background: "#fff",
          }}
          key={index}
        >
          {user.name} is {user.age} Years old
        </div>
      ))}
    </div>
  );
};

export default Users;
