import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./styles/global.styles";
import ThemeSelectionProvider, {
  ThemeSelectionContext,
} from "./providers/ThemeSelectionProvider";
import { ThemeProvider } from "styled-components";
import DefaultThemeStyles, {
  PandaThemeStyles,
  RhubarbThemeStyles,
  BumblebeeThemeStyles,
  PumpkinThemeStyles,
} from "./styles/theme.styles";

const ContextWrapper: React.FC = ({ children }) => {
  return <ThemeSelectionProvider>{children}</ThemeSelectionProvider>;
};

const ThemeProviderWrapper: React.FC = ({ children }) => {
  const [theme] = useContext(ThemeSelectionContext);

  const getTheme = (theme: string) => {
    if (theme === "panda") {
      return PandaThemeStyles;
    }
    if (theme === "rhubarb") {
      return RhubarbThemeStyles;
    }
    if (theme === "bumblebee") {
      return BumblebeeThemeStyles;
    }
    if (theme === "pumpkin") {
      return PumpkinThemeStyles;
    }
    return DefaultThemeStyles;
  };

  return (
    <ThemeProvider theme={() => getTheme(theme)}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContextWrapper>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </ContextWrapper>
  </React.StrictMode>
);
