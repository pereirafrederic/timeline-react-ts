import * as React from "react";
import { mdiEarth } from "@mdi/js";
import Icon from "@mdi/react";
import "./Univers.css";
import { IUnivers, ISpace, ITime, IEvenement } from "../../models/Models";

import {
  FastBackwardOutlined,
  StepBackwardOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
  FastForwardOutlined
} from "@ant-design/icons";
import Space from "../Space/Space";
import Time from "../Time/Time";
import Evenement from "../Evenement/Evenement";
//

interface IProps {
  univers?: IUnivers;
}

interface IState {}

export default class Spaces extends React.Component<IProps, IState> {
  public addUnivers() {
    console.log("addUnivers");
  }

  public renderEmpty() {
    return (
      <div className="Space___content__empty">
        <h2>Votre Univers est vide</h2>
        <div className="center">
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
    console.log("getSousLevel", level);
    let taille: Array<Object> = [];
    if (!!time.fils) {
      console.log("push fils ", taille.length, "vide");
      taille.push({});
    }
    time?.fils?.forEach(fils => {
      const el = this.getSousLevel(fils, level + 1);
      if (el && taille.length < level + el.length) {
        console.log("push fils", taille.length, el.length);
        el.map(e => taille.push({}));
      }
    });
    if (!taille.length) return null;
    console.log("return fils " + taille.length);
    return taille;
  }

  private getLevel(time: ITime) {
    const level = 1;
    let taille = [{}];
    if (!!time.fils) {
      console.log("push ", taille.length, "vide");
      taille.push({});
    }

    time.fils.forEach(fils => {
      const el = this.getSousLevel(fils, level + 1);
      if (el && taille.length < level + el.length) {
        console.log("push ", taille.length, el);
        el.map(e => taille.push({}));
      }
    });
    console.log("return " + taille.length);
    return taille;
  }

  public renderNotEmpty() {
    const { univers } = this.props;

    let timesSet: Set<ITime> = new Set();
    const ColTime: Array<Object> = [];
    univers?.times.forEach(time => {
      const re = this.getLevel(time);
      if (ColTime.length < re.length) {
        re.map(res => ColTime.push(res));
      }
    });

    return (
      <div className="Univers__content__spaces">
        <div className="side__top">
          <FastBackwardOutlined rotate={90} className="pointer" />
          <StepBackwardOutlined rotate={90} className="pointer" />
          <CaretLeftOutlined rotate={90} />
        </div>
        <div className="side__center">
          <table>
            <thead>
              <tr>
                {univers?.times?.map((time: ITime) => {
                  console.log("ColTime", ColTime);
                  return ColTime.map(ColTime => (
                    <th scope="col">
                      <Space />
                    </th>
                  ));
                })}
                {univers?.spaces?.map((space: ISpace) => (
                  <th scope="col">
                    <Space space={space} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {univers?.times?.map((time: ITime) => {
                return this.renderTime(timesSet, time);
              })}
              {univers?.times?.map((time: ITime) => (
                <tr>
                  <React.Fragment>
                    {univers?.spaces?.map((space: ISpace) => {
                      const evenementTime = space.evenements.filter(
                        ev => ev.idTime === time.id
                      );

                      return evenementTime?.map((ev: IEvenement) => (
                        <td>
                          <Evenement evenement={ev} />
                        </td>
                      ));
                    })}

                    {time?.fils?.map((time: ITime) => (
                      <React.Fragment>
                        {univers?.spaces?.map((space: ISpace) => {
                          const evenementTime = space.evenements.filter(
                            ev => ev.idTime === time.id
                          );

                          return evenementTime?.map((ev: IEvenement) => (
                            <td>
                              <Evenement evenement={ev} />
                            </td>
                          ));
                        })}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="side__bottom">
          <CaretRightOutlined rotate={90} className="pointer" />
          <StepForwardOutlined rotate={90} className="pointer" />
          <FastForwardOutlined rotate={90} className="pointer" />
        </div>
      </div>
    );
  }

  private renderTime(timesSet: Set<ITime>, time: ITime) {
    timesSet.add(time);
    return (
      <React.Fragment>
        <tr>
          <Time time={time} />
        </tr>
        <React.Fragment>
          {time.fils && !!time.fils.length && (
            <div className="Time__content__fils">
              {time.fils.map(time => {
                timesSet.add(time);
                return this.renderTime(timesSet, time);
              })}
            </div>
          )}
        </React.Fragment>
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
