export interface TreeModel {
  title: string;
  children?: TreeModel[];
  removed?: boolean;
}
