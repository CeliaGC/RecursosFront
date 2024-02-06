import { useState, useEffect } from "react";
import { UserService } from "../userService";

const UserList = () => {
  const [user, setUser] = useState({
    userName: "",
    userSurname: "",
  });

  const [userList, setUserList] = useState([]);
  const [colors, setColors] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let users = await UserService.getAllUsers();
    setUserList(users);
    setColors(new Array(users.length).fill('transparent'));
  }

  function handleNameChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleAddUserToList() {
    await UserService.submitUser(user);
    setUser({
      userName: "",
      userSurname: "",
    });
    getData();
  }

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * userList.length);
    const randomCandidate = userList[randomIndex];

    const updatedColors = colors.map((color, index) =>
      index === randomIndex ? 'red' : 'transparent'
    );

    setColors(updatedColors);
    setSelectedCandidate(randomCandidate);
  };

  return (
    <>
      <h1>Qué lista eres</h1>
      <label htmlFor="userName"></label>
      <input
        type="text"
        name="userName"
        value={user.userName}
        onChange={handleNameChange}
      />

      <label htmlFor="userSurname"></label>
      <input
        type="text"
        name="userSurname"
        value={user.userSurname}
        onChange={handleNameChange}
      />

      <button onClick={handleAddUserToList}>Añadir usuario</button>
      <ul>
        {userList.map((user, index) => (
          <li
            key={index}
            style={{ backgroundColor: colors[index] }}
          >
            {user.userName} {user.userSurname}
          </li>
        ))}
      </ul>
      <button onClick={handleDraw}>Sorteo</button>
    </>
  );
};

export default UserList;
