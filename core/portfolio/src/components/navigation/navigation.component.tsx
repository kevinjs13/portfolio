import React from "react";
import * as Styled from "./navigation.styles";
import { NavigationItems } from "../../data/routes";
import { useLocation } from "react-router-dom";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Styled.NavigationContainer>
      <Styled.LogoContainer href="/">
        <Styled.Logo>KEVIN JEFFERSON</Styled.Logo>
      </Styled.LogoContainer>
      <Styled.NavigationList>
        {NavigationItems.map((navigationItem) => (
          <Styled.NavigationItem key={navigationItem.id}>
            <Styled.NavigationLink
              href={navigationItem.link}
              isActive={location.pathname === navigationItem.path}
            >
              {navigationItem.name}
            </Styled.NavigationLink>
          </Styled.NavigationItem>
        ))}
      </Styled.NavigationList>
    </Styled.NavigationContainer>
  );
};
export default Navigation;
