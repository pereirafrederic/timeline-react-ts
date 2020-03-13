import * as React from "react";
import {
  AppstoreAddOutlined,
} from "@ant-design/icons";

import "./Space.css";

//
import { ISpace, ITime } from "../../models/Models";
import Time from "../Time/Time";

interface IProps {
  space?: ISpace;
}

interface IState {}

export default class Space extends React.Component<IProps, IState> {
  public addTime() {
    console.log("addTime");
  }

  public renderEmpty() {
    return (
      <div className="Space___content__empty">
        <h2>Votre espace est vide</h2>
        <div className="center">
          <AppstoreAddOutlined onClick={(e:any) => this.addTime()} />
        </div>
      </div>
    );
  }

  public renderNotEmpty() {
    const { space } = this.props;
    return (
      <div className="Space__content__times">

        <div className="side__center">
          {space?.times.map((time: ITime) => (
            <Time time={time} />
          ))}
        </div>
      </div>
    );
  }

  public render() {
    const { space } = this.props;
    return (
      <div className="Space">
        <div className="Space__header">
        <h2>{space?.nom}</h2>
        <h3>{space?.taille}</h3>
        </div>
        {!space?.times && this.renderEmpty()}
        {space?.times && this.renderNotEmpty()}</div>
      
    );
  }
}
