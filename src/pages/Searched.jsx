import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Searched() {
  const [searched, setsearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    getsearched(params.search);
  }, [params.search]);

  const getsearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setsearched(recipes.results);
  };

  const searchedCardComp = searched.map((elem) => {
    return (
      <motion.div key={elem.id}>
        <Link to={"/recipe/" + elem.id}>
          <img src={elem.image} alt="elem.title" />
          <h4>{elem.title}</h4>
        </Link>
      </motion.div>
    );
  });

  return <div>{searchedCardComp}</div>;
}

export default Searched;
