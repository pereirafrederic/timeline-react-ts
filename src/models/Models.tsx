export interface ISpace extends INominatif {
  times: Array<ITime>;
  taille: Number;
}

export interface ITime extends INominatif {
  indiceDepart: Number;
  taille: Number;
  fils: Array<ITime>;
  evenements: Array<IEvenement>;
}

export interface IEvenement extends INominatif {
  indiceDepart: Number;
  taille: Number;
}

interface INominatif {
  nom: String;
}
