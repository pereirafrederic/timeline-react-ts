export interface ISpace extends INominatif {
  times: Array<ITime>;
  taille: Number;
}

export interface ITime extends INominatif {
  indiceDepart: Number;
  taille: Number;
  fils: Array<ITime>;
  evenements: Array<Ievenement>;
}

export interface Ievenement extends INominatif {
  indiceDepart: Number;
  taille: Number;
  times: Array<ITime>;
}

interface INominatif {
  nom: String;
}
