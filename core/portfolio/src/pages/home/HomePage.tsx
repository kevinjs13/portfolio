import React from "react";
import * as Styled from './HomePage.styles'
import ProfileImage from "../../assets/images/profile.jpg";
import { v4 as uuidv4 } from "uuid";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoBehance,
  IoLogoGithub,
} from "react-icons/io5";

const SocialsData = [
  {
    name: "facebook",
    link: "https://facebook.com",
    Icon: IoLogoFacebook,
  },
  {
    name: "instagram",
    link: "https://instagram.com",
    Icon: IoLogoInstagram,
  },
  {
    name: "twitter",
    link: "https://twitter.com",
    Icon: IoLogoTwitter,
  },
  {
    name: "dribbble",
    link: "https://dribbble.com",
    Icon: IoLogoDribbble,
  },
  {
    name: "behance",
    link: "https://behance.com",
    Icon: IoLogoBehance,
  },
  {
    name: "github",
    link: "https://github.com",
    Icon: IoLogoGithub,
  },
];

const HomePage: React.FC = () => {
  return (
    <Styled.HomePageContainer>
      <Styled.ProfileImageContainer>
        <Styled.ProfileImage src={ProfileImage} alt="profile" />
      </Styled.ProfileImageContainer>
      <Styled.SubtextContainer>
        <Styled.Subtext>
          Hi! I'm <Styled.BoldText>Kevin</Styled.BoldText> <br />A{" "}
          <Styled.BoldText>full stack software engineer</Styled.BoldText> with a
          passion for <Styled.BoldText>design</Styled.BoldText>
        </Styled.Subtext>
        <Styled.SocialsContainer>
          {SocialsData.map((SocialsDataItem) => (
            <Styled.SocialsItem key={uuidv4()}>
              <Styled.SocialsItemLink href={SocialsDataItem.link}>
                {<SocialsDataItem.Icon />}
              </Styled.SocialsItemLink>
            </Styled.SocialsItem>
          ))}
        </Styled.SocialsContainer>
      </Styled.SubtextContainer>
    </Styled.HomePageContainer>
  );
};
export default HomePage;
