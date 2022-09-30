import React, { useEffect, useState } from "react";
import { /* Link, */ useParams } from "react-router-dom";
import styledComponents from "styled-components";
// import { motion } from "framer-motion";

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
      <Card key={elem.id}>
        <img src={elem.image} alt="elem.title" />
        <h4>{elem.title}</h4>
      </Card>
    );
  });

  return <div>{cuisineCardComp}</div>;
}

const Card = styledComponents.div`
`;
export default Cuisine;
