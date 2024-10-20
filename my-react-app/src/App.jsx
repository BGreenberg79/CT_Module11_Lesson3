import { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const onSelectedCharacter = (character) => {
    setSelectedCharacter(character.id);
  }

  return (
    <div>
      <h1>Marvel API</h1>
      <CharacterList onSelectedCharacter = {onSelectedCharacter}
      />
      <CharacterDetail selectedCharacter = {selectedCharacter}/>
    </div>
  );
}

export default App
