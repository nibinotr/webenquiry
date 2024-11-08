import React from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import EnquiryForm from './components/EnquiryForm';

// Create a router using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <EnquiryForm />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
