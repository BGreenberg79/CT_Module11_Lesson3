import { useState, useEffect } from "react";
import axios from "axios";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

// Task 4 Integrate components and update user interface

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
