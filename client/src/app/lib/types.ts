import "styled-components";
import { dayTheme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof dayTheme.colors;
    spacing: typeof dayTheme.spacing;
    borderRadius: typeof dayTheme.borderRadius;
    navbar: typeof dayTheme.navbar;
  }
}
