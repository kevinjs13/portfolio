import React from "react";
import * as Styled from "./SocialsContainer.styled";
import { v4 as uuidv4 } from "uuid";
import {
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoBehance,
  IoLogoGithub,
} from "react-icons/io5";
import { AiFillMediumCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

const SocialsContainer: React.FC = () => {
  const SocialsData = [
    {
      name: "medium",
      link: "https://medium.com/@kevinjs13",
      Icon: AiFillMediumCircle,
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/kevjeffsour/",
      Icon: TiSocialLinkedin,
    },
    {
      name: "twitter",
      link: "https://twitter.com/adevnamedkevin",
      Icon: IoLogoTwitter,
    },
    {
      name: "dribbble",
      link: "https://dribbble.com",
      Icon: IoLogoDribbble,
    },
    {
      name: "behance",
      link: "https://www.behance.net/kevinjsouribi",
      Icon: IoLogoBehance,
    },
    {
      name: "github",
      link: "https://github.com/kevinjs13",
      Icon: IoLogoGithub,
    },
  ];
  return (
    <Styled.SocialsContainer>
      {SocialsData.map((SocialsDataItem) => (
        <Styled.SocialsItem key={uuidv4()}>
          <Styled.SocialsItemLink href={SocialsDataItem.link} target="_blank">
            <SocialsDataItem.Icon />
          </Styled.SocialsItemLink>
        </Styled.SocialsItem>
      ))}
    </Styled.SocialsContainer>
  );
};
export default SocialsContainer;
