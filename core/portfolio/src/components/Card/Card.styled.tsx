import styled from "styled-components";

export const CardContainer = styled.div`
  width: 20rem;
  padding: 1em;
  background-color: #fff;
  border: 2px solid #000;
`;

export const ImageContainer = styled.div`
  text-align: center;
  height: 200px;
  border: 2px solid #000;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover; ;
`;

export const Title = styled.h1`
  font-size: 1em;
`;

export const Description = styled.h2`
  font-size: 0.8em;
`;

export const TechStack = styled.span`
  font-size: 0.7em;
`;

export const LinksContainer = styled.ul`
  list-style: none;
  padding: 0;
`;
export const Link = styled.li`
  margin-top: 1em;
  background-color: #fff;
  border: 2px solid #000;
`;
