import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";

import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import "./App.css";
import Space from "./Components/Space/Space";
import { ISpace } from "./models/Models";

const space: ISpace = {
  nom :"espace nom",
  taille : 25,
  times :[
    {
      nom : "time 1",
      indiceDepart : 1,
      taille: 5,
      evenements : [
       
      ],
      fils :[
        {
          nom : "time 1-1",
          indiceDepart : 1,
          taille: 5,
          evenements : [ {
            nom :"evenement 1*1",
            indiceDepart : 1,
            taille : 2,
          },{
            nom :"evenement 1*2",
            indiceDepart : 3,
            taille : 2,
          }],
          fils: []
        },{
          nom : "time 1-2",
          indiceDepart : 1,
          taille: 5,
          evenements : [ {
            nom :"evenement 1*1",
            indiceDepart : 1,
            taille : 2,
          },{
            nom :"evenement 1*2",
            indiceDepart : 3,
            taille : 2,
          }],
          fils: []
        }
      ]
    },
    {
      nom :"time 2",
      indiceDepart : 1,
      taille: 2,
      evenements:[{
        nom : "eve 1-1-1-1",
        indiceDepart : 1,
        taille : 2,
      },{
        nom : "eve 1-1-1-2",
        indiceDepart : 1,
        taille : 1,
      }],
      fils: []
    }
  ]
}

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
              <Route exact path={"/"} render={() => <Space space={space}/>} />

              <Route render={() => <Redirect push to={"/"} />} />
            </Switch>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
