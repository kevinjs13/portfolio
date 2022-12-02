import React from "react";
import * as Styled from "./HomePage.styled";
import ProfileImage from "../../assets/images/profile.jpg";
import SocialsContainer from "./SocialsContainer";
// import ProfileImage from "../../assets/images/profile-sketch.png";

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
          I like to{" "}
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
        <SocialsContainer />
      </Styled.SubtextContainer>
    </Styled.HomePageContainer>
  );
};
export default HomePage;
