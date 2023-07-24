import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Layout from "./Components/layout";
import { useRoutes } from "react-router-dom";
import Home from "./Components/home";
import Why from "./Components/why";
import Works from "./Components/works";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home name="home" /> },
    { path: "/why", element: <Why name="why" /> },
    // { path: "/user/:fname/:lname", element: <User /> },
    { path: "/works", element: <Works name="works" /> },
    // { path: "*", element: <Error /> },
  ]);
  return (
    <div className="App">
      <Layout header={'Home'}>{routes}</Layout>
    </div>
  );
}

export default App;
