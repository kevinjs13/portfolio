import {} from "styled-components";
import { ThemeType } from "../styles/theme.styles";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
