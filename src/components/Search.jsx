import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

function Search() {
  const [input, setinput] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(event) => setinput(event.target.value)}
          type="text"
          placeholder="search recipes"
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  margin: 0rem 20 rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(to right, white, #52afee);
    font-size: 1.5rem;
    color: black;
    padding: 1rem 3rem;
    border: grey solid;
    border-radius: 5rem;
    outline: 10rem;
    width: 100%;
    margin: 1rem auto;
    box-sizing: border-box;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: blue;
  }
`;

export default Search;
