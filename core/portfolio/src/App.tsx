import React from "react";
import { Routes, Route } from "react-router-dom";

import * as Styled from "./App.styles";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/projects/ProjectsPage";
import HomePage from "./pages/home/HomePage";
import { Paths } from "./data/routes.data";

const App: React.FC = () => {
  return (
    <Styled.AppContainer>
      <Navigation />
      <Routes>
        <Route path={Paths.ABOUT_ME} element={<HomePage />} />
        <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
