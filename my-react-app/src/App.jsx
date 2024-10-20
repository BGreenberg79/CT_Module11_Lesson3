import { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  let ts = "1728768095246";
  let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
  let hashVal ="77a953b9de082568b4b060eb0cfe1598";

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
      const apiResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`)
      setCharacters(apiResponse.data.data.results);
    } catch (error){
      console.error(`Error fetching characters:`, error);
    }
  };

  return (
    <div>
      <h1>Marvel API</h1>
      <CharacterList 
       characters= {characters}
      />
    </div>
  );
}

export default App
