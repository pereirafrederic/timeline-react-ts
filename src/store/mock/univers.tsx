import { ISpace, IUnivers } from "../../models/Models";

export const space: ISpace = {
  id: 1,
  nom: "espace 2",
  taille: 25,
  evenements: [
    {
      id: 6,
      nom: "ev 3 en space 2 en time 2",
      indiceDepart: 1,
      taille: 47,
      idTime: 456
    }
  ]
};
export const universSansRien: IUnivers = {
  id: 99,
  nom: "univers 99",
  taille: 15651,
  spaces: [],
  times: []
};

export const universSansEspace: IUnivers = {
  id: 99,
  nom: "univers 99",
  taille: 15651,
  spaces: [],
  times: [
    {
      id: 369,
      nom: "time 12",
      indiceDepart: 1,
      taille: 25,
      fils: []
    }
  ]
};

export const univers: IUnivers = {
  id: 2,
  nom: "univers 12",
  taille: 15651,
  spaces: [
    {
      id: 3,
      nom: "space 1 ",
      taille: 147,
      evenements: [
        {
          id: 4,
          nom: "ev 1 de space 1 en time 21 ",
          indiceDepart: 1,
          taille: 100,
          idTime: 147
        },
        {
          id: 5,
          nom: "ev 2 de space 1 en en time 13",
          indiceDepart: 1,
          taille: 258,
          idTime: 258
        }
      ]
    }
  ],
  times: [
    {
      id: 789,
      nom: "time 1",
      indiceDepart: 1,
      taille: 25,
      fils: [
        {
          id: 369,
          nom: "time 12",
          indiceDepart: 1,
          taille: 25,
          fils: []
        },
        {
          id: 258,
          nom: "time 13",
          indiceDepart: 1,
          taille: 25,
          fils: [
            {
              id: 2581,
              nom: "time 131",
              indiceDepart: 1,
              taille: 25,
              fils: []
            }
          ]
        }
      ]
    },
    {
      id: 456,
      nom: "time 2",
      indiceDepart: 1,
      taille: 25,
      fils: [
        {
          id: 147,
          nom: "time 21",
          indiceDepart: 1,
          taille: 25,
          fils: []
        }
      ]
    },
    {
      id: 123,
      nom: "time 3",
      indiceDepart: 1,
      taille: 25,
      fils: []
    }
  ]
};
