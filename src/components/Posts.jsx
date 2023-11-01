import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [selectPost, setSelectPost] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=20"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getPosts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleShowPost = (post) => {
    setSelectPost(post);
  };

  return (
    <PostsContainer>
      <h1>Posts</h1>
      {selectPost ? (
        <Div>
          <h2>Post with id = {selectPost.id}</h2>
          <p>ID: {selectPost.id}</p>
          <p>UserId: {selectPost.userId}</p>
          <p>Title: {selectPost.title}</p>
          <p>Body: {selectPost.body}</p>
          <Button onClick={() => setSelectPost(null)}>Back to post</Button>
        </Div>
      ) : (
        <Table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
            <th>Actions</th>
          </tr>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button onClick={() => handleShowPost(post)}>More</button>
              </td>
            </tr>
          ))}
        </Table>
      )}
    </PostsContainer>
  );
};

export default Posts;

const PostsContainer = styled.div`
  width: 700px;
  margin-left: 100px;
  margin-top: 100px;
  margin-bottom: 20rem;
  & h1 {
    color: #626161;
  }
`;

const Table = styled.table`
  width: 1000px;
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
