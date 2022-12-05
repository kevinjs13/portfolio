import React from "react";
import * as Styled from "./CardLink.styled";

interface CardLinkProps {
  text: string;
  link: string;
  icon?: JSX.Element;
  active: boolean;
}

const CardLink: React.FC<CardLinkProps> = ({ text, link, icon, active }) => {
  return (
    <Styled.CardLink href={active ? link : '#'} active={active}>
      {icon} <span>{text}</span>
    </Styled.CardLink>
  );
};
export default CardLink;
