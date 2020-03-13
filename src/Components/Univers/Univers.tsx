import * as React from "react";
import { mdiEarth } from '@mdi/js';
import Icon from '@mdi/react'
import "./Univers.css";
import { IUnivers, ISpace } from "../../models/Models";

import {
  
  FastBackwardOutlined,
  StepBackwardOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
  FastForwardOutlined
} from "@ant-design/icons";
import Space from "../Space/Space";
//

interface IProps {
  univers?:IUnivers;
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
        <Icon path={mdiEarth }
        title="Ajouter un univers"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="blue"
        spin/>
        </div>
      </div>
    );
  }

  public renderNotEmpty() {
    const { univers } = this.props;
    return (
      <div className="Univers__content__spaces">
        <div className="side__top">
          <FastBackwardOutlined rotate={90} className="pointer" />
          <StepBackwardOutlined rotate={90} className="pointer" />
          <CaretLeftOutlined rotate={90} />
        </div>
        <div className="side__center">
        {univers?.times.map((time: Itime) => (

          {univers?.spaces.map((space: ISpace) => (
            <Space space={space} />
          ))}
          ))}
        </div>
        <div className="side__bottom">
          <CaretRightOutlined rotate={90} className="pointer" />
          <StepForwardOutlined rotate={90} className="pointer" />
          <FastForwardOutlined rotate={90} className="pointer" />
        </div>
      </div>
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
        {univers?.times && this.renderNotEmpty()}</div>
      
    );
  }
}
