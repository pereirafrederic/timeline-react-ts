export enum EActionTypeCrud {
  getAll,
  getOne,
  post,
  put,
  delete,
  error
}

export enum EActionStore {
  ADD,
  REPLACE,
  REMOVE
}

export enum EActionEtat {
  SANS,
  EN_COURS,
  EN_ECHEC,
  FINI
}

export function isTypeOfActionEtat(action: EActionEtat | EActionTypeCrud) {
  return (
    action === EActionEtat.SANS ||
    action === EActionEtat.EN_COURS ||
    action === EActionEtat.EN_ECHEC ||
    action === EActionEtat.FINI
  );
}
