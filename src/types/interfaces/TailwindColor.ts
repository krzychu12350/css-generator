export interface TailwindColorHue {
    value: string;
    label: string;
    hex: string;
  }

export interface TailwindColorCategory {
    name: string;
    colors: Array<TailwindColorHue>;
  }