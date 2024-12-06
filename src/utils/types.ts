export interface Character{
    id: number,
    name: string,
    avatar: string
};

export interface Item {
  id: number;
  image: string;
  name: string;
  type: string;
};

export interface SelectOption {
  value: string;
  label: string;
}