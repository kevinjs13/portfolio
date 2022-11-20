import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import * as Styled from "./App.styles";
import Navigation from "./components/navigation/navigation.component";
import Design from "./pages/design/design.component";
import Development from "./pages/development/development.component";
import Home from "./pages/home/home.component";
import Personal from "./pages/personal/personal.component";

const App: React.FC = () => {
  return (
    <Styled.AppContainer>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/design" element={<Design />} />
        <Route path="/development" element={<Development />} />
        <Route path="/personal" element={<Personal />} />
      </Routes>
    </Styled.AppContainer>
  );
};

export default App;
