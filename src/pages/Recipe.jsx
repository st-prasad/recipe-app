import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [recipeData, setrecipeData] = useState([{}]);
  const [activeTabInstructions, setactiveTabInstructions] = useState([true]);
  let params = useParams();

  useEffect(() => {
    fetchRecipeData();
  }, []);

  const fetchRecipeData = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recipeDataResult = await data.json();
    setrecipeData(recipeDataResult);
  };

  return (
    <DetailWrapper>
      <TitleDiv>
        <h2>{recipeData.title}</h2>
      </TitleDiv>
      <ImageWrapper>
        <ImageDiv>
          <img src={recipeData.image} alt="recipeData.title" />
        </ImageDiv>
        <div>
          <Button
            className={activeTabInstructions ? "active" : ""}
            onClick={() => setactiveTabInstructions(true)}
          >
            Instructions
          </Button>
          <Button
            className={!activeTabInstructions ? "active" : ""}
            onClick={() => setactiveTabInstructions(false)}
          >
            Ingredients
          </Button>
        </div>
      </ImageWrapper>
      <InfoDiv>
        {activeTabInstructions ? (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: recipeData.summary }}></h3>
            {/* <h3
              dangerouslySetInnerHTML={{ __html: recipeData.instructions }}
            ></h3> */}
          </div>
        ) : (
          <div>
            <ul>
              {recipeData.extendedIngredients.map((elem) => (
                <li key={elem.id}>{elem.original}</li>
              ))}
            </ul>
          </div>
        )}
      </InfoDiv>
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: recipeData.instructions }}></h3>
      </div>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  /* margin-left: -5rem; */
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  .active {
    background: linear-gradient(to right, white, #52afee);
    color: solid black;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  /* margin-right: 2rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* box-sizing: border-box; */
  img {
    max-height: 300px;
    max-width: 300px;
    margin: 0 auto;
    /* float: none; */
    display: block;
  }
  border: ridge;
  /* @media (max-width: 400px) {
    flex-direction: row;
  } */
`;

const TitleDiv = styled.div`
  text-align: center;
  /* width: 100%; */
`;

const ImageDiv = styled.div`
  margin-bottom: 1rem;
`;

const InfoDiv = styled.div``;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  gap: 1rem;
  /* margin-right: 2rem; */
  font-weight: 600;
  :hover {
    /* background: rgba(black, 0.5); */
    border: 3px solid black;
  }
`;

export default Recipe;
