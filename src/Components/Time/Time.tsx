import * as React from "react";


import "./Time.css";
import { ITime } from "../../models/Models";
import Evenement from "../Evenement/Evenement";

interface IProps {
  time: ITime;
}

interface IState {}

export default class Time extends React.Component<IProps, IState> {

  public render() {
const {time } = this.props;

    return (
      <div className="Time">
        <div className="Time__header">
        <h2>{time.nom}</h2>
        <h3>{`${time.indiceDepart} - ${time.taille}`} </h3>
        </div>
        <div className="Time__content">
        {time.evenements && !!time.evenements.length && <div className="Time__content__evenements">
        {time.evenements.map( (ev) => <Evenement evenement={ev} />  )}</div>}
        {time.fils && !!time.fils.length && <div className="Time__content__fils">
        {time.fils.map (time => (<Time time={time} />) )}</div>}
        </div>
      </div>
    );
  }
}
