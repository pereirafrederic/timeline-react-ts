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

const univers: IUnivers = {
  nom :"univers 1",
  taille: 15651,
  spaces: [space, space]
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
              <Route exact path={"/"} render={() => <Univers univers={univers}/>} />

              <Route render={() => <Redirect push to={"/"} />} />
            </Switch>
          </div>
        </Router>
      </body>
    </div>
  );
}

export default App;
