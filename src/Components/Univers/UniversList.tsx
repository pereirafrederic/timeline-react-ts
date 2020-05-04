import React, { useCallback } from "react";
import { mdiEarth } from "@mdi/js";
import "./Univers.css";
import { IUnivers } from "../../models/Models";
import { Icon } from "@mdi/react";
import {
  UniversDispatcher,
  IUniversState
} from "../../store/reducers/UniversReducer";

import * as reactRedux from "react-redux";
const useStore = reactRedux.useStore;
const useDispatch = reactRedux.useDispatch;
const useSelector = reactRedux.useSelector;

interface IProps {}

interface IStateProps {
  liste?: Array<IUnivers> | undefined;
}

export default class UniversList extends React.Component<IProps, IStateProps> {
  stateProps = useSelector((el: IUniversState) => el.liste);

  universUseDispatch = Dispatch();
  universDispatcher = new UniversDispatcher(this.universUseDispatch);

  onCreate = (univers: IUnivers) => {
    this.universDispatcher.post(univers);
    //TODO FPE redirect /univers/:id
    useCallback(() => this.universDispatcher.post(univers), [univers]);
  };
  public renderEmpty() {
    return (
      <div className="ListUnivers__empty">
        <h2>Votre Univers est vide</h2>

        <div className="center pointeur" onClick={e => this.onCreate}>
          <h3>créer votre premier univers</h3>
          <Icon
            path={mdiEarth}
            title="créer votre premier univers"
            size={1}
            horizontal
            vertical
            rotate={90}
            color="blue"
            spin
          />
        </div>
      </div>
    );
  }

  public renderUnivers(univers: IUnivers) {
    return (
      <div className="ListUnivers__card__content">
        <h2>{univers?.nom}</h2>
        <h3>{univers?.taille}</h3>
      </div>
    );
  }

  public renderNotEmpty() {
    const { liste } = this.state;
    return (
      <div className="ListUnivers__card__list">
        {liste?.map(univers => this.renderUnivers(univers))}
      </div>
    );
  }

  public render() {
    const { liste } = this.state;
    return (
      <div className="ListUnivers">
        {!liste?.length && this.renderEmpty()}
        {!!liste?.length && this.renderNotEmpty()}
      </div>
    );
  }
}
