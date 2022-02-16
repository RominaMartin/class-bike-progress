import { createContext } from 'react';

import { groups } from './Bikes/DefaultValues';

export interface IColors {
  [key: string]: string;
}

export interface IGroup {
  [id: string]: {
    label: string;
    colors: IColors;
    names: string[];
  };
}

interface IBikesContext {
  groups: IGroup;
  currentGroup: string | null;
  setCurrent: (id: string) => void;
  setColors: (colors: IColors) => void;
}

const BikesContextDefaultValues: IBikesContext = {
  groups: groups,
  currentGroup: null,
  setCurrent: () => {},
  setColors: () => {},
};

export const BikesContext = createContext<IBikesContext>(BikesContextDefaultValues);
