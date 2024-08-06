export interface ICategory {
    id:number|string;
    name: string;
    image: string;
    itemCount: number;
  }
  export type FormCate = Pick<ICategory,'name'|'image'|'itemCount'>