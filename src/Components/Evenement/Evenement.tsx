import * as React from "react";
import "./Evenement.css";
import { IEvenement } from "../../models/Models";
import Icon from "@mdi/react";
import { mdiMapMarkerPlus } from "@mdi/js";
//

interface IProps {
  evenement?: IEvenement;
  isEnabledToCreate?: Boolean;
}

interface IState {}

export default class Evenement extends React.Component<IProps, IState> {
  public render() {
    const { evenement, isEnabledToCreate } = this.props;
    if (!evenement)
      return (
        <div
          className={
            "Evenement  " + isEnabledToCreate ? "withoutBorder" : "withBorder"
          }
        >
          <div className="Evenement__header">
            {isEnabledToCreate && (
              <React.Fragment>
                <div className="center pointeur">
                  <Icon
                    path={mdiMapMarkerPlus}
                    title="Ajouter un Evenement"
                    size={1}
                    horizontal
                    vertical
                    rotate={180}
                    color="blue"
                  />
                </div>
              </React.Fragment>
            )}
          </div>
        </div>
      );

    return (
      <div className="Evenement pointeur withBorder">
        <div className="Evenement__header">
          <h2>{evenement.nom} </h2>
          <h3>{`${evenement.indiceDepart} - ${evenement.taille}`} </h3>
        </div>
      </div>
    );
  }
}
