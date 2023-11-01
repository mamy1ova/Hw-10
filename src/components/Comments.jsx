import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState("");
  const [selectComment, setSelectComment] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?_limit=20"
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getComments();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleShowPost = (comment) => {
    setSelectComment(comment);
  };

  return (
    <CommentsContainer>
      <h1>Comments</h1>
      {selectComment ? (
        <Div>
          <h2>Post with id = {selectComment.id}</h2>
          <p>ID: {selectComment.id}</p>
          <p>PostId: {selectComment.postId}</p>
          <p>Name: {selectComment.name}</p>
          <p>Email: {selectComment.email}</p>
          <p>Body: {selectComment.body}</p>
          <Button onClick={() => setSelectComment(null)}>
            Back to Comments
          </Button>
        </Div>
      ) : (
        <Table>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
          {comments.map((comment) => (
            <tr>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              <td>
                <button onClick={() => handleShowPost(comment)}>More</button>
              </td>
            </tr>
          ))}
        </Table>
      )}
    </CommentsContainer>
  );
};

export default Comments;

const CommentsContainer = styled.div`
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
