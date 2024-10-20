// Task 3 Implement the character detail feature
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = () => {
    const [selectedCharacter, setSelectedCharacter] = useState([]);


    let characterId=selectedCharacter.id
    let ts = "1728768095246";
    let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
    let hashVal ="77a953b9de082568b4b060eb0cfe1598";
    const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
    
    const retrieveCharacter =async () => {
        try{
            const response = await axios.get(apiMarvelURL);
            setSelectedCharacter(response.data.data.results);
        } catch (error) {console.error('Error retrieveing characters', error);
        }
    }
// onClick img tag?
    useEffect(()=>{
        retrieveCharacter();
    }, []);

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {fetchedCharacters.map((character)=>(
                    <li key={character.id}>

                    </li>
                ))}
            </ul>
        </div>
    );

};

export default CharacterList;