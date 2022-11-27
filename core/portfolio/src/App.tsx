import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import * as Styled from "./App.styles";
import Navigation from "./components/Navigation/Navigation";
import ProjectsPage from "./pages/projects/ProjectsPage";
import HomePage from "./pages/home/HomePage";
import PersonalPage from "./pages/personal/PersonalPage";
import { Paths } from "./data/routes";

const App: React.FC = () => {
  return (
    <Styled.AppContainer>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={Paths.HOME} element={<Navigate replace to="/" />} />
        <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
        <Route path={Paths.PERSONAL} element={<PersonalPage />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
