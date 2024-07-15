import React from 'react';

const Post = ({ title, content }) => {
  return (
    <div className="post">
        <h2>{title}</h2>
        <p>{content}</p>
    </div>  
  );  
};

const AllPosts = (posts) => {
  return (
      <div className="posts">
          {posts.map((post) => (
              <Post key={post.id} title={post.title} content={post.content} />
          ))}
      </div>
  );
};

export {AllPosts as default, Post};