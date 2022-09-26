import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


function Popular() {

    const [random, setRandom] = useState([])

    // useeffect with empty dependancy array => run this only once after component renders
    useEffect(() => {
        randomRecipes();

        // return () => {
        //     second
        // }
    }, []);

    const randomRecipes = async () => {
        // custom environment variables must start with REACT_APP_ to avoid accidentally exposing a private key on the machine that could have the same name


        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=5`);
        const data = await api.json();
        setRandom(data.recipes);
    }


    return (
        <WrapperDiv>
            <h3>random</h3>
            {random.map((obj)=><CardDiv key={obj.id}>
                <p>{obj.title}</p>
                <img src={obj.image} alt={obj.title} />
            </CardDiv>)}
        </WrapperDiv>
    )
}

const WrapperDiv = styled.div`margin: 4rem 0rem`;
const CardDiv = styled.div`min-height:25rem;
border-radius:2rem`;

export default Popular