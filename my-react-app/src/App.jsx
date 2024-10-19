import { useState, useEffect } from "react";
import axios from "axios";
import characterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const apiResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`)
      setCharacters(response.data);
    } catch (error){
      console.error(`Error fetching characters:`, error);
    }
  };

  return (
    <div>
      <h1>Marvel API</h1>
      <characterList 
       characters= {characters}
      />
    </div>
  )
}

export default App
