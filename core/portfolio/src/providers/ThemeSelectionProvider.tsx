import { createContext, ReactNode, useState } from "react";

export const ThemeSelectionContext = createContext<any>(null);

const { Provider } = ThemeSelectionContext;

const ThemeSelectionProvider = ({ children }: { children?: ReactNode }) => {
  const [theme, setTheme] = useState<string>("panda");

  return <Provider value={[theme, setTheme]}>{children}</Provider>;
};

ThemeSelectionProvider.context = ThemeSelectionContext;

export default ThemeSelectionProvider;
