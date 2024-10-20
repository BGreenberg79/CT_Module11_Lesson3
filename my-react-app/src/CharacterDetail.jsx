// Task 3 Implement the character detail feature
import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({selectedCharacter}) => {
    const [detailCharacter, setDetailCharacter] = useState([]);

   
    useEffect(()=>{
        
        const retrieveCharacter =async () => {
            try{
                console.log(selectedCharacter)
                let ts = "1728768095246";
                let publicKey ="d439bcb5d546b0de1cbff183b2365de5";
                let hashVal ="77a953b9de082568b4b060eb0cfe1598";
                const apiMarvelURL = `https://gateway.marvel.com:443/v1/public/characters/${selectedCharacter}?ts=${ts}&apikey=${publicKey}&hash=${hashVal}`;
                
                const response = await axios.get(apiMarvelURL);
                console.log(response);
                setDetailCharacter(response.data.data.results[0]);
            } catch (error) {console.error('Error retrieveing characters', error);
            }
        }    
        
        if (selectedCharacter) retrieveCharacter();
    }, [selectedCharacter]);

    return (
        <div>
            <h2>Character Details</h2>
            <ul>
                <h5>{detailCharacter.name}</h5>
                <h5>Series</h5>
                {
                    detailCharacter && detailCharacter.series && (
                       detailCharacter.series.items.map((item)=>(
                        <p>{item.name}</p>
                       ))
                    )
                }
                <h5>Stories</h5>
                {
                    detailCharacter && detailCharacter.stories && (
                       detailCharacter.stories.items.map((item)=>(
                        <p>{item.name}</p>
                       ))
                    )
                }
                <h5>Comics</h5>
                {
                    detailCharacter && detailCharacter.comics && (
                       detailCharacter.comics.items.map((item)=>(
                        <p>{item.name}</p>
                       ))
                    )
                }
                <h5>Events</h5>
                {
                    detailCharacter && detailCharacter.events && (
                       detailCharacter.events.items.map((item)=>(
                        <p>{item.name}</p>
                       ))
                    )
                }
            </ul>
        </div>
    );

};

export default CharacterDetail;