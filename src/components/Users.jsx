import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [selectUsers, setSelecUsers] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users?_limit=20"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getComments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleShowPost = (user) => {
    setSelecUsers(user);
  };

  return (
    <UsersContainer>
      <h1>Users</h1>
      {selectUsers ? (
        <Div>
          <h2>User with id = {selectUsers.id}</h2>
          <p>ID: {selectUsers.id}</p>
          <p>UserId: {selectUsers.id}</p>
          <p>Name: {selectUsers.name}</p>
          <p>Username: {selectUsers.username}</p>
          <p>Email: {selectUsers.email}</p>
          <Button onClick={() => setSelecUsers(null)}>Back to Users</Button>
        </Div>
      ) : (
        <Table>
          <tr>
            <th>username</th>
            <th>name</th>
            <th>id</th>
            <th>Actions</th>
          </tr>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.id}</td>
              <td>
                <button onClick={() => handleShowPost(user)}>More</button>
              </td>
            </tr>
          ))}
        </Table>
      )}
    </UsersContainer>
  );
};

export default Users;

const UsersContainer = styled.div`
  width: 700px;
  margin-left: 100px;
  margin-top: 100px;
  margin-bottom: 20rem;
  & h1 {
    color: #626161;
  }
`;

const Table = styled.table`
  width: 900px;
  border: 2px solid #fba607;
  padding: 30px;
  & tr > td {
    padding-bottom: 35px;
    padding-left: 20px;
  }
  & tr > th {
    padding-bottom: 20px;
    text-align: start;
    font-weight: bold;
    font-size: 20px;
    padding-left: 20px;
  }
  & button {
    margin-left: 20px;
    border: none;
    width: 90px;
    height: 35px;
    border-radius: 7px;
    background-color: #fba607;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;

const Button = styled.button`
  margin-top: 60px;
  border: none;
  width: 200px;
  height: 35px;
  border-radius: 7px;
  background-color: #fba607;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const Div = styled.div`
  margin-top: 40px;
  border: 1px solid #c5c5c5;
  padding: 20px;
  border-radius: 8px;
  & p {
    padding: 10px;
  }
  &:hover {
    box-shadow: 0.5px 2.3px 22.6px rgba(114, 114, 114, 0.247),
      1.3px 6.3px 62.6px rgba(109, 109, 109, 0.247);
    transform: scale(1.02);
    transition: 0.5s;
    cursor: pointer;
  }
`;
