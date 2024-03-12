import React from "react";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ItemDetail from "./itemDetail";
import data from './projects.json';

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

const itemRoutes = Object.entries(data).map(([title, details]) => ({
  path: `/${slugify(title)}`,
  element: <ItemDetail item={{ title, ...details }} />
}));

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  ...itemRoutes
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;