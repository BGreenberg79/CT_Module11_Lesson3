// Task 3 Implement the character detail feature
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({selectedCharacter}) => {
    const [detailCharacter, setDetailCharacter] = useState([]);

   
    const retrieveCharacter =async () => {
        try{
            console.log(selectedCharacter)
            let ts = "1728768095246";
            let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
            let hashVal ="77a953b9de082568b4b060eb0cfe1598";
            const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters/${selectedCharacter}?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
            
            const response = await axios.get(apiMarvelURL);
            console.log(response);
            setDetailCharacter(response.data.data.results);
        } catch (error) {console.error('Error retrieveing characters', error);
        }
    }

    useEffect(()=>{
        if (selectedCharacter) retrieveCharacter();
    }, [selectedCharacter]);

    return (
        <div>
            <h2>Characters</h2>
            <ul>
                {
                    detailCharacter && (
                       detailCharacter.series.items.map((item)=>(
                        <p>{item.name}</p>
                       ))
                    )
                }
            </ul>
        </div>
    );

};

export default CharacterDetail;