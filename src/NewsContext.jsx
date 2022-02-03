import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setdata] = useState();

  const apikey = "";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`)
      .then((data) => setdata(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>📰📰 India News App 📰📰</h1>

      <NewsContext.Provider value={{ data }}>
        {props.children}
      </NewsContext.Provider>
    </>
  );
};
