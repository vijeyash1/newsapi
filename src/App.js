import React from "react";
import News from "./components/News";
import { NewsContextProvider } from "./NewsContext";
import "./App.css";
function App() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default App;
