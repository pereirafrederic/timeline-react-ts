import * as React from "react";
import "./Evenement.css";
import { IEvenement } from "../../models/Models";

//

interface IProps {
  evenement: IEvenement;
}

interface IState {}

export default class Evenement extends React.Component<IProps, IState> {
  public render() {
    const { evenement } = this.props;
    return (
      <div className="Evenement">
         <div className="Evenement__header">
        <h2>{evenement.nom} </h2>
        <h3>{`${evenement.indiceDepart} - ${evenement.taille}`} </h3>
        </div>
      </div>
    );
  }
}
