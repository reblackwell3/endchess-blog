import React from 'react';
import { useRoutes } from 'react-router-dom';
import AllPosts from './components/Post';
import About from './components/About';

const AppRoutes = () => {
  const routes = [
    { path: '/', element: <AllPosts /> },
    { path: '/about', element: <About /> },
    // Add other routes here as needed
  ];

  return useRoutes(routes);
};

export default AppRoutes;
