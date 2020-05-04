import { Action, Reducer, Dispatch } from "redux";
import { IUnivers } from "../../models/Models";

import firebase from "../../firebase";
import { EActionTypeCrud, EActionEtat, isTypeOfActionEtat } from "./ActionCrud";
import { IGenericState } from "./Interfaces";

export interface IUniversState extends IGenericState<IUnivers> {}

export const initialState: IUniversState = {
  liste: [],
  accesById: [],
  id: undefined,
  unite: undefined,
  etat: EActionEtat.SANS,
  error: undefined
};

export interface DispatchAction extends Action<EActionTypeCrud | EActionEtat> {
  payload: Partial<IUniversState>;
}

export const UniversReducer: Reducer<IUniversState, DispatchAction> = (
  state = initialState,
  action
) => {
  if (isTypeOfActionEtat(action.type)) {
    const newEtat = action.type as EActionEtat;
    return { ...state, etat: newEtat };
  } else if (action.type === EActionTypeCrud.getAll) {
    const liste = action.payload.liste || [];
    const { accesById } = majListeAccesBy(liste);

    return { ...state, liste, accesById };
  } else if (action.type === EActionTypeCrud.getOne) {
    const unite = action.payload.unite;
    const { accesById } = majUniteAccesBy(state.accesById, unite);

    return { ...state, unite: action.payload.unite, accesById };
  } else if (action.type === EActionTypeCrud.post) {
    const unite = action.payload.unite;
    const { accesById } = majUniteAccesBy(state.accesById, unite);

    return { ...state, unite: action.payload.unite, accesById };
  } else if (action.type === EActionTypeCrud.put) {
    const unite = action.payload.unite;
    const { accesById } = majUniteAccesBy(state.accesById, unite);

    return { ...state, unite: action.payload.unite, accesById };
  } else if (action.type === EActionTypeCrud.delete) {
    const id = action.payload.id;
    const { accesById } = removeUniteAccesBy(state.accesById, id);

    return { ...state, unite: action.payload.unite, accesById };
  } else if (action.type === EActionTypeCrud.error) {
    return { ...state, unite: initialState.unite };
  } else return state;
};

export class UniversDispatcher {
  private readonly dispatch: Dispatch<DispatchAction>;

  private readonly firebaseCollectionName = "univers";

  constructor(dispatch: Dispatch<DispatchAction>) {
    this.dispatch = dispatch;
  }
  getAll = async () => {
    const db = firebase.firestore();
    const data = await db.collection(this.firebaseCollectionName).get();
    const liste: Array<IUnivers> = data.docs.map(doc => {
      const docFormate = doc.data() as IUnivers;
      return docFormate;
    });
    this.dispatch({ type: EActionTypeCrud.getAll, payload: { liste } });
  };

  getOne = async (id: number) => {
    const ref = await firebase
      .firestore()
      .collection(this.firebaseCollectionName)
      .doc(`${id}`);
    ref.get().then(doc => {
      if (doc.exists) {
        const docFormate = doc.data() as IUnivers;

        this.dispatch({
          type: EActionTypeCrud.getOne,
          payload: { unite: docFormate }
        });
      } else {
        this.dispatch({
          type: EActionTypeCrud.error,
          payload: { error: "chargement impossible" }
        });
      }
    });
  };

  post = (univers: IUnivers) => {
    const db = firebase.firestore();
    db.collection(this.firebaseCollectionName).add(univers);
    this.dispatch({ type: EActionTypeCrud.post, payload: { unite: univers } });
  };

  put = (univers: IUnivers) => {
    const db = firebase.firestore();
    db.collection(this.firebaseCollectionName)
      .doc(`${univers.id}`)
      .set({ ...univers, univers });
    this.dispatch({ type: EActionTypeCrud.put, payload: { unite: univers } });
  };

  delete = (id: number) => {
    const db = firebase.firestore();
    db.collection(this.firebaseCollectionName)
      .doc(`${id}`)
      .delete();
    this.dispatch({ type: EActionTypeCrud.delete, payload: {} });
  };
}
function majListeAccesBy(liste: IUnivers[]) {
  const accesById: IUnivers[] = [];
  liste?.forEach(el => {
    accesById[el.id] = el;
  });
  return { accesById };
}

function majUniteAccesBy(accesById: IUnivers[], unite?: IUnivers) {
  if (unite?.id) {
    accesById[unite.id] = unite;
  }
  return { accesById };
}
function removeUniteAccesBy(accesById: IUnivers[], id?: number) {
  if (id) {
    accesById = accesById.filter(el => el.id !== id);
  }
  return { accesById };
}
