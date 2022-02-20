export interface IColors {
  [key: string]: string;
}

export interface IGroup {
  [id: string]: {
    label: string;
    colors: IColors;
    names: string[];
    components: { [id: string]: boolean };
  };
}

export interface IComponent {
  disabled: boolean;
  id: string;
}
