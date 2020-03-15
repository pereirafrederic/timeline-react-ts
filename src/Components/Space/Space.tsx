import * as React from "react";

import { mdiMapPlus } from "@mdi/js";
import Icon from "@mdi/react";

import "./Space.css";

//
import { ISpace } from "../../models/Models";

interface IProps {
  space?: ISpace;
  isEnabledToCreate?: Boolean;
}

interface IState {}

export default class Space extends React.Component<IProps, IState> {
  public addSpace() {
    console.log("addSpace");
  }
  public render() {
    const { space, isEnabledToCreate } = this.props;

    if (!space)
      return (
        <div className="Space pointeur" onClick={e => this.addSpace()}>
          <div className="Space__header">
            {isEnabledToCreate && (
              <React.Fragment>
                <h2>Ajouter un espace</h2>
                <div className="center">
                  <Icon
                    path={mdiMapPlus}
                    title="Ajouter un Espace"
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
      <div className="Space">
        <div className="Space__header">
          <h2>{space?.nom}</h2>
          <h3>{space?.taille}</h3>
        </div>
      </div>
    );
  }
}
