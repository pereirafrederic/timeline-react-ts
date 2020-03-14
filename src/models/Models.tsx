export interface IUnivers extends INominatif {
  times: Array<ITime>;
  spaces: Array<ISpace>;
}

export interface ISpace extends INominatif {
  evenements: Array<IEvenement>;
}

export interface ITime extends INominatif {
  indiceDepart: Number;
  fils: Array<ITime>;
}

export interface IEvenement extends INominatif {
  indiceDepart: Number;
  idTime: Number;
}

interface INominatif {
  id: number;
  nom: String;
  taille: Number;
}
