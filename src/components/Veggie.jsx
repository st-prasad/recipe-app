import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import noCImage from "../images/nocontent.png";
import "./components.css";

function Veggie() {
  const [veggie, setveggie] = useState([]);

  // useeffect with empty dependancy array => run this only once after component renders
  useEffect(() => {
    veggieRecipes();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const veggieRecipes = async () => {
    const checkveggie = localStorage.getItem("veggie");

    if (checkveggie) {
      setveggie(JSON.parse(checkveggie));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setveggie(data.recipes);
      console.log(veggie);
    }
  };

  return (
    <WrapperDiv>
      <h3>veggie</h3>
      <Splide
        options={{
          perPage: 3,
          type: "loop",
          drag: "free",
        }}
      >
        {veggie.map((obj) => {
          return (
            <SplideSlide key={obj.id}>
              {!obj.image ? (
                <CardDiv>
                  <p>Recipe not available</p>
                  <img src={noCImage} alt="No longer available" />
                </CardDiv>
              ) : (
                <CardDiv>
                  <p>{obj.title}</p>
                  <img src={obj.image} alt={obj.title} />
                </CardDiv>
              )}
            </SplideSlide>
          );
        })}
      </Splide>
    </WrapperDiv>
  );
}

const WrapperDiv = styled.div`
  margin: 4rem 0rem;
`;
const CardDiv = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    margin: 4rem;
  }
`;

export default Veggie;
