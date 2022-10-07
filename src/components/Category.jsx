import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <StyledNavLink to={"/Cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to={"/Cuisine/american"}>
        <FaHamburger />
        <h4>american</h4>
      </StyledNavLink>
      <StyledNavLink to={"/Cuisine/thai"}>
        <GiNoodles />
        <h4>thai</h4>
      </StyledNavLink>
      <StyledNavLink to={"/Cuisine/Korean"}>
        <GiChopsticks />
        <h4>Korean</h4>
      </StyledNavLink>
    </List>
  );
}

///// styled components /////

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #3c3b3f, #605c3c);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    background: linear-gradient(35deg, #c5d5ff, #5e43d8);
  }
  &.active {
    background: linear-gradient(115deg, #c3d4ff, #9d87ff);
    h4 {
      color: white;
    }
    svg {
      color: white;
    }
  }
`;

export default Category;
