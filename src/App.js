import React, { useState, useEffect } from "react";
import Header from "./components/shared/Header";
import CharactersGrid from "./components/characters/CharacterGrid";
import Search from "./components/shared/Search";
import axios from "axios";
import "./App.scss";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters`
      )

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <Search/>
      <CharactersGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
