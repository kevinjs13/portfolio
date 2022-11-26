import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import * as Styled from "./App.styles";
import Navigation from "./components/navigation/navigation.component";
import DesignPage from "./pages/design/DesignPage";
import DevelopmentPage from "./pages/development/DevelopmentPage";
import HomePage from "./pages/home/HomePage";
import Personal from "./pages/personal/personal.component";

const App: React.FC = () => {
  return (
    <Styled.AppContainer>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/design" element={<DesignPage />} />
        <Route path="/development" element={<DevelopmentPage />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
