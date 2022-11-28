import styled from "styled-components";
import breakpoints from "../../styles/breakpoints.styles";

export const HomePageContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  height: 700px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media ${breakpoints.large} {
    flex-wrap: nowrap;
  }
`;
export const ProfileImageContainer = styled.div`
  flex: 1;
  text-align: center;
  align-self: center;
`;
export const ProfileImage = styled.img`
  height: 80vw;
  width: 80vw;
  object-fit: cover;
  border-radius: 50%;  
  @media ${breakpoints.medium} {
    height: 300px;
    width: 300px;
  }
  @media ${breakpoints.large} {
    height: 400px;
    width: 400px;
  }

`;
export const SubtextContainer = styled.span`
  text-align: center;
  flex: 1;
  padding: 5em;
  @media ${breakpoints.large} {
    text-align: right;
  }
`;

export const Subtext = styled.div`
  font-size: 2.5rem;
`;

export const SocialsContainer = styled.ul`
  all: unset;
  display: flex;
  gap: 3em;
  flex-direction: unset;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media ${breakpoints.large} {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;

export const SocialsItem = styled.li`
  list-style: none;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  text-align: center;
`;

export const SocialsItemLink = styled.a`
  all: unset;
  cursor: pointer;
  text-decoration: none;

  svg {
    padding: 1em;
    height: 3rem;
    width: 3rem;
  }
`;

export const BoldText = styled.span`
  font-family: "KarlaBold", sans-serif;
  font-weight: 600;
`;
