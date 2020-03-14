import * as React from "react";
import { AppstoreAddOutlined } from "@ant-design/icons";

import "./Space.css";

//
import { ISpace } from "../../models/Models";

interface IProps {
  space?: ISpace;
}

interface IState {}

export default class Space extends React.Component<IProps, IState> {
  public render() {
    const { space } = this.props;

    if (!space)
      return (
        <div className="Space">
          <div className="Space__header"></div>
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
