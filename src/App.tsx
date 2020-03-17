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
import { ISpace, IUnivers, ITime } from "./models/Models";

var _ = require("lodash");

interface IProps {}

interface IState {
  univerActif?: IUnivers | null;
}

export default class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      univerActif: null
    };
    this.addUnivers = this.addUnivers.bind(this);
    this.addSpace = this.addSpace.bind(this);
    this.addTime = this.addTime.bind(this);
  }

  space: ISpace = {
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
  universSansRien: IUnivers = {
    id: 99,
    nom: "univers 99",
    taille: 15651,
    spaces: [],
    times: []
  };

  universSansEspace: IUnivers = {
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

  univers: IUnivers = {
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
      this.space
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

  public addUnivers(el: IUnivers) {
    this.setState({ univerActif: el });
  }

  public addSpace(el: ISpace) {
    if (this.state.univerActif)
      this.setState({
        univerActif: {
          ...this.state.univerActif,
          spaces: [...this.state.univerActif.spaces, el]
        }
      });
  }

  public addTime(el: ITime, arbo: Array<number>) {
    if (this.state.univerActif) {
      const newtimes: Array<ITime> = this.getNewTime(
        this.state.univerActif.times,
        el,
        arbo
      );

      this.setState({
        univerActif: {
          ...this.state.univerActif,
          times: newtimes
        }
      });
    }
  }

  public getNewTime(
    times: Array<ITime>,
    time: ITime,
    arbo: Array<number>
  ): Array<ITime> {
    debugger;
    if (arbo.length > 0) {
      debugger;
      const index = _.findIndex(times, ["id", arbo[0]]);
      const fils = this.getNewTime(times[index].fils, time, arbo.slice(1));
      const el = times[index];
      const newTime = {
        ...el,
        fils
      };
      times[index] = newTime;
      return times;
    }
    return [...times, time];
  }

  public render() {
    const { univerActif } = this.state;
    let el = (
      <Univers
        addUnivers={this.addUnivers}
        addSpace={this.addSpace}
        addTime={this.addTime}
      />
    );
    if (!!univerActif)
      el = (
        <Univers
          univers={univerActif}
          addUnivers={this.addUnivers}
          addSpace={this.addSpace}
          addTime={this.addTime}
        />
      );

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
                <Route exact path={"/"} render={() => el} />
                <Route
                  exact
                  path={"/univers-plein"}
                  render={() => (
                    <Univers
                      univers={this.univers}
                      addUnivers={this.addUnivers}
                      addSpace={this.addSpace}
                      addTime={this.addTime}
                    />
                  )}
                />
                <Route
                  exact
                  path={"/univers-sans-espace"}
                  render={() => (
                    <Univers
                      univers={this.universSansEspace}
                      addUnivers={this.addUnivers}
                      addSpace={this.addSpace}
                      addTime={this.addTime}
                    />
                  )}
                />

                <Route
                  exact
                  path={"/univers-vide"}
                  render={() => (
                    <Univers
                      univers={this.universSansRien}
                      addUnivers={this.addUnivers}
                      addSpace={this.addSpace}
                      addTime={this.addTime}
                    />
                  )}
                />
                <Route
                  exact
                  path={"/sans-univers"}
                  render={() => (
                    <Univers
                      addUnivers={this.addUnivers}
                      addSpace={this.addSpace}
                      addTime={this.addTime}
                    />
                  )}
                />

                <Route render={() => <Redirect push to={"/"} />} />
              </Switch>
            </div>
          </Router>
        </body>
      </div>
    );
  }
}
