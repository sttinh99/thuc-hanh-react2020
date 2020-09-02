import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </div>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
