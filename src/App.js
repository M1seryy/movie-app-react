import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const BASE_URL = "http://www.omdbapi.com/?s=star wars&apikey=c2e9880c";

  useEffect(() => {
    axios.get(BASE_URL).then((response) => {
      setData(response);
    });
  }, []);
  console.log(data);
  return;
  <div className="App"></div>;
}

export default App;
