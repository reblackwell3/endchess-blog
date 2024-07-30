import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  max-width: 800px;

  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const PostContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    width: 100%;
    margin: 5px;
    padding: 10px;
  }
`;

const PostTitle = styled.h2`
  margin: 0;
  color: #333;
`;

const PostContent = styled.p`
  margin: 0;
  color: #555;
`;

const Post = ({ title, content }) => {
  return (
    <PostContainer>
      <PostTitle>{title}</PostTitle>
      <PostContent>{content}</PostContent>
    </PostContainer>
  );
};

const fetchPosts = async (setPosts) => {
  try {
    const response = await axios.get('http://localhost:5000/api/posts');
    console.log('Posts fetched:', response.data);
    setPosts(response.data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
};

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(setPosts);
  }, []);

  return (
    <PostsContainer>
      {posts.map((post) => (
        <Post key={post.id} title={post.title} content={post.content} />
      ))}
    </PostsContainer>
  );
};

export default AllPosts;
