import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import "./App.css";
import Univers from "./Components/Univers/Univers";
import { ISpace, IUnivers } from "./models/Models";

const space: ISpace = {
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
const universSansRien: IUnivers = {
  id: 99,
  nom: "univers 99",
  taille: 15651,
  spaces: [],
  times: []
};

const universSansEspace: IUnivers = {
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

const univers: IUnivers = {
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
    },
    space
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

function App() {
  return (
    <div className="App">
      <header className="App__header">
        Timeline App
        <ClockCircleOutlined spin={true} />
      </header>
      <body className="App__Body">
        <Router>
          <div className="App__routes">
            <Switch>
              <Route
                exact
                path={"/univers-plein"}
                render={() => <Univers univers={univers} />}
              />
              <Route
                exact
                path={"/univers-sans espace"}
                render={() => <Univers univers={universSansEspace} />}
              />

              <Route
                exact
                path={"/univers-vide"}
                render={() => <Univers univers={universSansRien} />}
              />
              <Route exact path={"/sans-univers"} render={() => <Univers />} />

              <Route render={() => <Redirect push to={"/"} />} />
            </Switch>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
