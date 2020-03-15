import * as React from "react";

import "./Time.css";
import { ITime } from "../../models/Models";

import { mdiTimelineClockOutline } from "@mdi/js";
import { mdiPlus } from "@mdi/js";
import Icon from "@mdi/react";

interface IProps {
  time?: ITime;
  isEnabledToCreate?: Boolean;
}

interface IState {}

export default class Time extends React.Component<IProps, IState> {
  public render() {
    const { time, isEnabledToCreate } = this.props;

    if (!time)
      return (
        <div
          className={
            "Time pointeur " + isEnabledToCreate
              ? "withoutBorder"
              : "withBorder"
          }
        >
          <div className="Time__header">
            {isEnabledToCreate && (
              <React.Fragment>
                <div className="center fpe-row">
                  <Icon
                    path={mdiTimelineClockOutline}
                    title="Ajouter une temporalité"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="blue"
                  />
                  <Icon
                    path={mdiPlus}
                    title="Ajouter une temporalité"
                    size={1}
                    horizontal
                    vertical
                    color="blue"
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      );

    return (
      <div className={"Time pointeur withBorder"}>
        <div className="Time__header">
          <h2>{time.nom}</h2>
          <h3>{`${time.indiceDepart} - ${time.taille}`} </h3>
        </div>
      </div>
    );
  }
}
