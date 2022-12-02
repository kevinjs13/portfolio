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

export interface CardUrlListItem {
  text: string;
  active: boolean;
}
interface CardUrlList {
  appUrl: CardUrlListItem;
  brandingUrl: CardUrlListItem;
  wireframeUrl: CardUrlListItem;
  repositoryUrl: CardUrlListItem;
}

export interface CardProps {
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
      <Styled.ImageContainer>
        <Styled.Image src={imageUrl} alt={imageAltText} />
      </Styled.ImageContainer>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Description>{description}</Styled.Description>
      <Styled.TechStack>Built with: {techStack}</Styled.TechStack>
      <Styled.LinksContainer>
        {linksData.map((linksDataItem) => (
          <Styled.Link key={uuidv4()}>
            <CardLink
              key={uuidv4()}
              text={linksDataItem.text}
              link={linksDataItem.link.text}
              icon={linksDataItem.icon}
              active={linksDataItem.link.active}
            />
          </Styled.Link>
        ))}
      </Styled.LinksContainer>
    </Styled.CardContainer>
  );
};
export default Card;
