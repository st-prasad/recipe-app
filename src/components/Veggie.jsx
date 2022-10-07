import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
              {/* when api give a broken result */}
              {!obj.image ? (
                <CardDiv>
                  <p>Recipe not available</p>
                  <img src={noCImage} alt="No longer available" />
                </CardDiv>
              ) : (
                <CardDiv>
                  <Link to={"/recipe/" + obj.id}>
                    <p>{obj.title}</p>
                    <img src={obj.image} alt={obj.title} />
                  </Link>
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
  position: relative;
  margin: 1rem;

  img {
    /* margin: 4rem; */

    /* opacity: 1;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out; */

    display: block;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
  & :hover img {
    opacity: 0.5;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: black;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(231 220 220 / 70%);
    border-radius: 0.5rem;
  }
`;

export default Veggie;
