import * as React from "react";
import { Card, Col, Row } from "antd";

import "./Time.css";
import { ITime } from "../../models/Models";

interface IProps {
  time: ITime;
}

interface IState {}

export default class Time extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className="Time">
        <div className="site-card-wrapper">
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
