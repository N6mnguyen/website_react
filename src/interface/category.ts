export interface ICategory {
    id:number|string;
    name: string;
  }
  export type FormCate = Pick<ICategory,'name'>