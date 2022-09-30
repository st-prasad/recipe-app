import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import noCImage from "../images/nocontent.png";
import "./components.css";

function Popular() {
  const [random, setRandom] = useState([]);

  // useeffect with empty dependancy array => run this only once after component renders
  useEffect(() => {
    randomRecipes();

    // return () => {
    //     second
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const randomRecipes = async () => {
    const checkRandom = localStorage.getItem("random");

    if (checkRandom) {
      setRandom(JSON.parse(checkRandom));
      //   if exist on local Storage, turn from string to an array.
      //   else fetch from api and springify and store on local storage
    } else {
      // custom environment variables must start with REACT_APP_ to avoid accidentally exposing a private key on the machine that could have the same name

      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
      localStorage.setItem("random", JSON.stringify(data.recipes));
      setRandom(data.recipes);
      console.log(random);
    }
  };

  return (
    <WrapperDiv>
      <h3>random</h3>
      <Splide
        options={{
          perPage: 3,
          type: "loop",
          drag: "free",
        }}
      >
        {random.map((obj) => {
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

// Splide.defaults = {
//   perPage: 3,
// };

export default Popular;
