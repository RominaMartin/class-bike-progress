import 'styled-components';

export interface IHeadings {
  fontFamily: string;
  fontWeight: number;
  size: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: { [key: string]: string };
    spacings: { [key: string]: string };
    global: { [key: string]: string | number };
    headings: IHeadings[];
  }
}
