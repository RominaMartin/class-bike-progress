import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key: string]: string };
    spacings: { [key: string]: string };
    global: { [key: string]: string | number };
    headings: { [key: string]: string | number }[];
  }
}
