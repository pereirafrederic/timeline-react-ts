import * as React from "react";

import "./Time.css";
import { ITime } from "../../models/Models";

interface IProps {
  time: ITime;
}

interface IState {}

export default class Time extends React.Component<IProps, IState> {
  public render() {
    const { time } = this.props;

    return (
      <div className="Time">
        <div className="Time__header">
          <h2>{time.nom}</h2>
          <h3>{`${time.indiceDepart} - ${time.taille}`} </h3>
        </div>
      </div>
    );
  }
}
