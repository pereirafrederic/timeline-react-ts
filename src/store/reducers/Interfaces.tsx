import { EActionEtat } from "./ActionCrud";

export interface IGenericState<T> extends IAccessState<T>, IActionEtat {
  liste: Array<T>;
  id: number | undefined;
  unite: T | undefined;
}

export interface IActionEtat {
  etat: EActionEtat;
  error: string | undefined;
}

export interface IAccessState<T> {
  accesById: T[];
}
