import { ModelNameUrl } from "../model/model-name-url";
import { ModelNames } from "../model/names.model";

export interface ModelItem{
  name:string,
  id:number,
  attributes:ModelNameUrl[],
  category:ModelNameUrl,
  cost:number,
  names:ModelNames[],
  sprites:any
}