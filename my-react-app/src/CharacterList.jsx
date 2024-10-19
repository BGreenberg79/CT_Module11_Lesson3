// Task 1 Sign Up for API Key
// let ts = "1728768095246";
// let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
// let privateKey = "b4f967f271fbc92b00eed71fe6180d2c5fad88fd";
// let hashVal ="77a953b9de082568b4b060eb0cfe1598";

import { useState, useEffect } from 'react';
import axios from 'axios';

const characterList = ({characters, onCharacterSearch}) => {
    let ts = "1728768095246";
    let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
    let privateKey = "b4f967f271fbc92b00eed71fe6180d2c5fad88fd";
    let hashVal ="77a953b9de082568b4b060eb0cfe1598";
    let characters = ['Luke Cage', 'Ant-Man', 'Mister Negative', 'Gambit', 'Professor X', 'Scarlet Witch']
    const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
    
    const retrieveCharacter =async () => {
        try{
            await axios.get(apiMarvelURL);
            onCharacterSearch();
        } catch {console.error('Error retrieveing characters', error);
        }
    }
    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {characters.map(character=>(
                    <li>Name: {character.data.results[0].name} <img src={character.data.results[0].thumbnail.path}/></li>
                ))}
            </ul>
        </div>
    )

}
export default characterList