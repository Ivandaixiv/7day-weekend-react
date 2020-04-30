import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
