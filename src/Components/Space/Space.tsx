import * as React from "react";
import {
  //AppstoreAddOutlined,
  FastBackwardOutlined,
  StepBackwardOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  StepForwardOutlined,
  FastForwardOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";

import "./Space.css";
import Time from "../Time/Time";

interface IProps {
  times: Array<any>;
}

interface IState {}

export default class Space extends React.Component<IProps, IState> {
  public addTime() {
    console.log("addTime");
  }

  public renderEmpty() {
    // <AppstoreAddOutlined onClick={e => this.addTime()} />
    return (
      <div className="Space_empty">
        <h2>Votre espace est vide</h2>
        <div className="center"></div>
      </div>
    );
  }

  public renderNotEmpty() {
    return (
      <div className="Space_notEmpty">
        <div className="side__top">
          <FastBackwardOutlined rotate={90} className="pointer" />
          <StepBackwardOutlined rotate={90} className="pointer" />
          <CaretLeftOutlined rotate={90} />
        </div>
        <div className="side__center">
          {this.props.times.map((time: any) => (
            <Time time={time} />
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
    return <div className="Space">{this.renderNotEmpty()}</div>;
  }
}
