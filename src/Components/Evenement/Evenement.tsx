import * as React from "react";

import "./Evenement.css";
import { Ievenement } from "../../models/Models";

//

interface IProps {
  evenement: Ievenement;
}

interface IState {}

export default class Evenement extends React.Component<IProps, IState> {
  public render() {
    const { evenement } = this.props;
    return (
      <div className="Evenement">
        <h2>{evenement.nom}</h2>
      </div>
    );
  }
}
