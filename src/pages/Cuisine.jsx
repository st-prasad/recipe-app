import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, /* Link, */ useParams } from "react-router-dom";
import styled from "styled-components";

function Cuisine() {
  const [cuisine, setcuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getcuisine(params.type);
  }, [params.type]);

  const getcuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setcuisine(recipes.results);
  };

  const cuisineCardComp = cuisine.map((elem) => {
    return (
      <CardDiv key={elem.id}>
        <Link to={"/recipe/" + elem.id}>
          <img src={elem.image} alt="elem.title" />
          <h4>{elem.title}</h4>
        </Link>
      </CardDiv>
    );
  });

  return <ContainerDiv>{cuisineCardComp}</ContainerDiv>;
}

// const ContainerDiv = styled.div`
// `;
const ContainerDiv = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(autofit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const CardDiv = styled.div`
  img {
    max-height: 300px;
    max-width: 300px;
    margin: 0 auto;
    display: block;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Cuisine;
