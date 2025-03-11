import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainContent from "./components/MainContent";

const App = () => (
  <BrowserRouter>
    <MainContent />
  </BrowserRouter>
);

export default App;
