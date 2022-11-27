import React from "react";
import {
  VscFileCode,
  VscNotebookTemplate,
  VscPaintcan,
  VscPreview,
} from "react-icons/vsc";
import CardLink from "../CardLink";
import * as Styled from "./Card.styled";
import { v4 as uuidv4 } from "uuid";

interface CardUrlList {
  appUrl: string;
  brandingUrl: string;
  wireframeUrl: string;
  repositoryUrl: string;
}

interface CardProps {
  imageUrl: string;
  imageAltText: string;
  techStack: string;
  title: string;
  description: string;
  urls: CardUrlList;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  imageAltText,
  techStack,
  urls,
  title,
  description,
}) => {
  const linksData = [
    { text: "Visit App", icon: <VscPreview />, link: urls.appUrl },
    { text: "Branding", icon: <VscPaintcan />, link: urls.brandingUrl },
    {
      text: "Wireframe",
      icon: <VscNotebookTemplate />,
      link: urls.wireframeUrl,
    },
    { text: "Repository", icon: <VscFileCode />, link: urls.repositoryUrl },
  ];

  return (
    <Styled.CardContainer>
      <div>
        <img src={imageUrl} alt={imageAltText} />
      </div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <span>Built with: {techStack}</span>
      {linksData.map((linksDataItem) => (
        <CardLink
          key={uuidv4()}
          text={linksDataItem.text}
          link={linksDataItem.link}
        />
      ))}
    </Styled.CardContainer>
  );
};
export default Card;
