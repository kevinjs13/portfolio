import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const ProfileImageContainer = styled.div`
  flex: 1;
  text-align: center;
`;
export const ProfileImage = styled.img`
  height: 30rem;
  width: 30rem;
  max-width: 30vw;
  max-height: 30vw;
  object-fit: cover;
  border-radius: 50%;
`;
export const SubtextContainer = styled.span`
  text-align: right;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 5em;
`;

export const Subtext = styled.div`
  font-size: 2.5rem;
`;

export const SocialsContainer = styled.ul`
  all: unset;
  display: flex;
  gap: 3em;
  flex-direction: row-reverse;
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
