import React from "react";
import * as Styled from "./Navigation.styled";
import { NavigationItems } from "../../data/routes.data";
import { useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <Styled.NavigationContainer>
      <Styled.NavigationWrapper>
        <Styled.LogoContainer to="/">
          <Styled.Logo>KEVIN JEFFERSON</Styled.Logo>
        </Styled.LogoContainer>
        <Styled.NavigationList>
          {NavigationItems.map((navigationItem) => {
            if (navigationItem.type === "file") {
              return (
                <Styled.NavigationItem key={uuidv4()}>
                  <Styled.FileLink
                    href={navigationItem.path}
                    target="_blank"
                    isActive={location.pathname === navigationItem.path}
                  >
                    {navigationItem.name}
                  </Styled.FileLink>
                </Styled.NavigationItem>
              );
            } else {
              return (
                <Styled.NavigationItem key={uuidv4()}>
                  <Styled.NavigationLink
                    to={navigationItem.path}
                    isActive={location.pathname === navigationItem.path}
                  >
                    {navigationItem.name}
                  </Styled.NavigationLink>
                </Styled.NavigationItem>
              );
            }
          })}
        </Styled.NavigationList>
      </Styled.NavigationWrapper>
    </Styled.NavigationContainer>
  );
};
export default Navigation;
