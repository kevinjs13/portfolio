import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Styled from "./App.styled";
import Navigation from "./components/Navigation";
import ProjectsPage from "./pages/projects/ProjectsPage";
import HomePage from "./pages/home/HomePage";
import { Paths } from "./data/routes.data";
import { ThemeSelectionContext } from "./providers/ThemeSelectionProvider";
import Select from "./components/shared/Select";

const App: React.FC = () => {
  const [, setTheme] = useContext(ThemeSelectionContext);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value.toLowerCase());
  };
  
  return (
    <Router>
      <Styled.AppContainer>
        <Navigation />
        <Styled.SelectWrapper>
          <span>Select Theme:</span>
          <Select onChange={(event) => handleSelect(event)}>
            <option>Panda</option>
            <option>Rhubarb</option>
            <option>Bumblebee</option>
            <option>Pumpkin</option>
          </Select>
        </Styled.SelectWrapper>

        <Routes>
          <Route path={Paths.ABOUT_ME} element={<HomePage />} />
          <Route path={Paths.PROJECTS} element={<ProjectsPage />} />
        </Routes>
      </Styled.AppContainer>
    </Router>
  );
};

export default App;
