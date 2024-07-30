import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Post.css';

const Post = ({ title, content }) => {
  return (
    <div className="post">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>  
  );  
};

const fetchPosts = async (setPosts) => {
    try {
        const response = await axios.get('http://localhost:5000/api/posts');
        console.log('Posts fetched:', response.data);
        setPosts(response.data);
    } catch (error) {
        console.error('Error fetching pots:', error);
    }
};

const AllPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts(setPosts);
    }, []);

    return (
      <div className="posts">
          {posts.map((post) => (
              <Post key={post.id} title={post.title} content={post.content} />
          ))}
      </div>
    );
};

export {AllPosts as default, Post};