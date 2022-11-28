import React from "react";
import { useLocation } from "react-router-dom";
import * as Styled from "./PersonalPage.styled";
import { v4 as uuidv4 } from "uuid";
import Resume from "../../components/Resume";
import Hobbies from "../../components/Hobbies";
import { Paths } from "../../data/routes.data";

const PersonalPage: React.FC = () => {
  const location = useLocation();
  const personalNavigationItems = [
    { name: `Resume`, path: Paths.RESUME },
    { name: `Hobbies`, path: Paths.HOBBIES },
  ];

  return (
    <Styled.PersonalPageContainer>
      <Styled.NavigationItemsContainer>
        {personalNavigationItems.map((personalNavigationItem) => (
          <Styled.NavigationItem key={uuidv4()}>
            <Styled.NavigationLink
              to={personalNavigationItem.path}
              isActive={location.pathname === personalNavigationItem.path}
            >
              {personalNavigationItem.name}
            </Styled.NavigationLink>
          </Styled.NavigationItem>
        ))}
      </Styled.NavigationItemsContainer>
      {location.pathname === Paths.RESUME && <Resume />}
      {location.pathname === Paths.HOBBIES && <Hobbies />}
    </Styled.PersonalPageContainer>
  );
};
export default PersonalPage;
