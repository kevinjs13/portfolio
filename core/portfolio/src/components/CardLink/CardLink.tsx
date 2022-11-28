import React from "react";
import * as Styled from "./CardLink.styled";

interface CardLinkProps {
  text: string;
  link: string;
  icon?: JSX.Element;
}

const CardLink: React.FC<CardLinkProps> = ({ text, link, icon }) => {
  return (
    <Styled.CardLink href={link}>
      {icon} <span>{text}</span>
    </Styled.CardLink>
  );
};
export default CardLink;
