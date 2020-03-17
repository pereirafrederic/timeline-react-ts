import * as React from "react";
import { mdiEarth, mdiSkipPrevious, mdiMenuDown } from "@mdi/js";
import Icon from "@mdi/react";
import { mdiSkipBackward } from "@mdi/js";
import "./Univers.css";
import { IUnivers, ISpace, ITime, IEvenement } from "../../models/Models";

import Space from "../Space/Space";
import Time from "../Time/Time";
import Evenement from "../Evenement/Evenement";
//

var _ = require("lodash");

interface IProps {
  univers?: IUnivers;
  addUnivers: Function;
  addSpace: Function;
  addTime: Function;
}

interface IState {}

export default class Spaces extends React.Component<IProps, IState> {
  public addUnivers() {
    const { addUnivers } = this.props;

    console.log("addUnivers");

    const univers: IUnivers = {
      nom: "univers " + Math.random(),
      id: Math.random(),
      taille: Math.random(),
      spaces: [],
      times: []
    };

    addUnivers(univers);
  }

  public renderEmpty() {
    return (
      <div className="Space___content__empty">
        <h2>Votre Univers est vide</h2>

        <div className="center pointeur" onClick={e => this.addUnivers()}>
          <h3>ajouter un univers</h3>
          <Icon
            path={mdiEarth}
            title="Ajouter un univers"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="blue"
            spin
          />
        </div>
      </div>
    );
  }
  private getSousLevel(time: ITime, level: number) {
    let retour = level;
    time?.fils?.forEach(fils => {
      level = level + 1;
      const retour2 = this.getSousLevel(fils, level);
      if (retour2 && retour2 > retour) retour = retour2;
    });
    return retour;
  }

  private getLevel(time: ITime) {
    console.log("getLevel sur", time.nom);
    let level = 0;

    time?.fils?.forEach(fils => {
      level = level + 1;
      const retour = this.getSousLevel(fils, level);
      if (retour && retour > level) level = retour;
    });
    console.log("getLevel return ", level);
    return level;
  }

  public renderNotEmpty() {
    const { univers, addTime, addSpace } = this.props;

    let timesSet: Set<ITime> = new Set();
    let ColTime: Array<Object> = [{}]; //pour la dernière colonne qui sera addTime
    univers?.times?.forEach(time => {
      const re = this.getLevel(time);
      console.log("test", ColTime.length < re, ColTime.length, re);
      for (let index = 0; index <= re; index++) {
        ColTime.push({});
      }
    });

    const arbo: Array<number> = [];

    return (
      <div className="Univers__content__spaces">
        <div className="side__center">
          <table>
            <thead>
              <tr>
                {ColTime.map((colTime, index) => (
                  <th scope="col">
                    {index === 0 && (
                      <div>
                        <Icon
                          path={mdiSkipBackward}
                          size={1}
                          horizontal
                          vertical
                          rotate={270}
                          color="red"
                        />
                        <Icon
                          path={mdiSkipPrevious}
                          size={2}
                          horizontal
                          vertical
                          rotate={270}
                          color="red"
                        />
                        <Icon
                          path={mdiMenuDown}
                          size={2}
                          horizontal
                          vertical
                          rotate={0}
                          color="red"
                        />
                      </div>
                    )}
                    {index > 0 && (
                      <Space addSpace={addSpace} isEnabledToCreate={false} />
                    )}
                  </th>
                ))}
                {univers?.spaces?.map((space: ISpace) => (
                  <th scope="col">
                    <Space addSpace={addSpace} space={space} />
                  </th>
                ))}
                <th scope="col">
                  <Space addSpace={addSpace} isEnabledToCreate={true} />
                </th>
              </tr>
            </thead>
            <tbody>
              {!!univers?.times?.length && (
                <tr>
                  <Time arbo={[]} addTime={addTime} isEnabledToCreate={true} />
                </tr>
              )}
              {univers?.times?.map((time: ITime) => {
                return this.renderTime(timesSet, time, [], ColTime.length - 1);
              })}
              <tr>
                <Time
                  arbo={arbo}
                  addTime={addTime}
                  isEnabledToCreate={true}
                  withMessage={!univers?.times?.length}
                />
              </tr>
              <tr>
                <div>
                  <Icon
                    path={mdiSkipBackward}
                    size={2}
                    horizontal
                    vertical
                    rotate={90}
                    color="red"
                  />
                  <Icon
                    path={mdiSkipPrevious}
                    size={2}
                    horizontal
                    vertical
                    rotate={90}
                    color="red"
                  />
                  <Icon
                    path={mdiMenuDown}
                    size={2}
                    horizontal
                    vertical
                    rotate={180}
                    color="red"
                  />
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  private renderSpaceTime(time: ITime): JSX.Element {
    const { univers } = this.props;
    return (
      <React.Fragment>
        {univers?.spaces?.map((space: ISpace) => {
          const evenementTime = space?.evenements?.filter(
            ev => ev.idTime === time.id
          );

          if (!evenementTime?.length) {
            console.log("space vide");
            return (
              <td>
                <Evenement isEnabledToCreate={true} />
              </td>
            );
          }
          return evenementTime?.map((ev: IEvenement) => (
            <td>
              <Evenement isEnabledToCreate={true} />
              <Evenement evenement={ev} />
              <Evenement isEnabledToCreate={true} />
            </td>
          ));
        })}
      </React.Fragment>
    );
  }

  private renderTime(
    timesSet: Set<ITime>,
    time: ITime,
    arbo: Array<number>,
    niveaumax: number
  ) {
    const { addTime } = this.props;

    const niveau = arbo.length + 1;
    const level = this.getLevel(time);
    console.log(
      "time ",
      time.nom,
      "niveau",
      niveau,
      "niveauMax",
      niveaumax,
      "level",
      level
    );
    timesSet.add(time);
    let ColTimeBefore: Array<Object> = [];
    let ColTimeAfter: Array<Object> = [];
    for (let index = 1; index < niveaumax; index++) {
      if (index < niveau) {
        ColTimeBefore.push({});
      } else {
        ColTimeAfter.push({});
      }
    }
    const arboFils = Object.assign([], arbo);
    const trouve = _.findIndex(arboFils, ["id", time.id]);
    if (trouve === -1) arboFils.push(time.id);
    debugger;
    console.log("arbre", arbo, arboFils);
    return (
      <React.Fragment>
        <tr>
          {ColTimeBefore &&
            ColTimeBefore.map(colTime => (
              <td>
                <Time arbo={arbo} addTime={addTime} isEnabledToCreate={false} />
              </td>
            ))}
          <td>
            <tr>
              <Time arbo={arbo} addTime={addTime} isEnabledToCreate={true} />
            </tr>
            <Time arbo={arbo} addTime={addTime} time={time} />
            <tr>
              <Time arbo={arbo} addTime={addTime} isEnabledToCreate={true} />
            </tr>
          </td>
          {ColTimeAfter &&
            ColTimeAfter.map((colTime, index) => (
              <td>
                <Time
                  arbo={arboFils}
                  addTime={addTime}
                  isEnabledToCreate={
                    0 === level && index === 0 && niveau !== niveaumax
                  }
                />
              </td>
            ))}
          <td>
            <Time
              arbo={arboFils}
              addTime={addTime}
              isEnabledToCreate={niveau === niveaumax && level === 0}
            />
          </td>
          {this.renderSpaceTime(time)}
        </tr>

        {time.fils && !!time.fils.length && (
          <React.Fragment>
            {time.fils.map(time => {
              return this.renderTime(timesSet, time, arboFils, niveaumax);
            })}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }

  public render() {
    const { univers } = this.props;
    return (
      <div className="Univers">
        <div className="Univers__header">
          <h2>{univers?.nom}</h2>
          <h3>{univers?.taille}</h3>
        </div>
        {!univers?.times && this.renderEmpty()}
        {univers?.times && this.renderNotEmpty()}
      </div>
    );
  }
}
