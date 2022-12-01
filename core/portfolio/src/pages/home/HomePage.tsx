import React from "react";
import * as Styled from "./HomePage.styled";
import ProfileImage from "../../assets/images/profile.jpg";
// import ProfileImage from "../../assets/images/profile-sketch.png";

import { v4 as uuidv4 } from "uuid";
import {
  IoLogoTwitter,
  IoLogoDribbble,
  IoLogoBehance,
  IoLogoGithub,
} from "react-icons/io5";
import { AiFillMediumCircle } from "react-icons/ai";
import { TiSocialLinkedin } from "react-icons/ti";

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

const HomePage: React.FC = () => {
  const links = {
    personal: "/assets/files/resume.pdf",
    github: "https://github.com/kevinjs13",
    design: "https://www.behance.net/kevinjsouribi",
    cook: "https://instagram.com/thesourfoodie",
    doodle: "https://instagram.com/pixelandpigment",
    photos: "https://instagram.com/pointerandclicker",
    travel: "https://instagram.com/hadalayover",
  };
  return (
    <Styled.HomePageContainer>
      <Styled.ProfileImageContainer>
        <Styled.ProfileImage src={ProfileImage} alt="profile" />
      </Styled.ProfileImageContainer>
      <Styled.SubtextContainer>
        <Styled.Subtext>
          Hi! I'm{" "}
          <Styled.BoldText>
            <Styled.Link href={links.personal} target="_blank">
              Kevin
            </Styled.Link>
          </Styled.BoldText>
          <br />A{" "}
          <Styled.BoldText>
            <Styled.Link href={links.github} target="_blank">
              full stack software engineer
            </Styled.Link>
          </Styled.BoldText>
          <br /> with a passion for{" "}
          <Styled.BoldText>
            <Styled.Link href={links.design} target="_blank">
              design
            </Styled.Link>
          </Styled.BoldText>
        </Styled.Subtext>
        <Styled.Subtext>
          I also like to{" "}
          <Styled.BoldText>
            <Styled.Link href={links.cook} target="_blank">
              cook
            </Styled.Link>
          </Styled.BoldText>
          , <br />
          <Styled.BoldText>
            <Styled.Link href={links.doodle} target="_blank">
              doodle
            </Styled.Link>
          </Styled.BoldText>
          , <br />
          <Styled.BoldText>
            <Styled.Link href={links.photos} target="_blank">
              take photos
            </Styled.Link>
          </Styled.BoldText>
          , <br />
          and{" "}
          <Styled.BoldText>
            <Styled.Link href={links.travel} target="_blank">
              travel
            </Styled.Link>
          </Styled.BoldText>
        </Styled.Subtext>
        <Styled.SocialsContainer>
          {SocialsData.map((SocialsDataItem) => (
            <Styled.SocialsItem key={uuidv4()}>
              <Styled.SocialsItemLink
                href={SocialsDataItem.link}
                target="_blank"
              >
                <SocialsDataItem.Icon />
              </Styled.SocialsItemLink>
            </Styled.SocialsItem>
          ))}
        </Styled.SocialsContainer>
      </Styled.SubtextContainer>
    </Styled.HomePageContainer>
  );
};
export default HomePage;
