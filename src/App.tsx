import React from "react";

import "./App.css";
import { ISpace, IUnivers, ITime } from "./models/Models";
import { ClockCircleOutlined } from "@ant-design/icons";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import UniversList from "./Components/Univers/UniversList";
import Home from "./Components/Home/Home";

var _ = require("lodash");

interface IProps {}

interface IStateProps {}

export default class App extends React.Component<IProps, IStateProps> {
  /* const [listeUnivers, setListeUnivers] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("univers").get();
      setListeUnivers();
    };
    fetchData();
  }, []);*/

  public addUnivers(el: IUnivers) {
    //  this.setState({ univerActif: el });
  }

  public addSpace(el: ISpace) {
    /*  if (this.state.univerActif)
      this.setState({
        univerActif: {
          ...this.state.univerActif,
          spaces: [...this.state.univerActif.spaces, el]
        }
      });*/
  }

  public addTime(el: ITime, arbo: Array<number>) {
    /*if (this.state.univerActif) {
      const newtimes: Array<ITime> = this.getNewTime(
        this.state.univerActif.times,
        el,
        arbo
      );

      this.setState({
        univerActif: {
          ...this.state.univerActif,
          times: newtimes
        }
      });
    }*/
  }

  public getNewTime(
    times: Array<ITime>,
    time: ITime,
    arbo: Array<number>
  ): Array<ITime> {
    debugger;
    if (arbo.length > 0) {
      debugger;
      const index = _.findIndex(times, ["id", arbo[0]]);
      const fils = this.getNewTime(times[index].fils, time, arbo.slice(1));
      const el = times[index];
      const newTime = {
        ...el,
        fils,
      };
      times[index] = newTime;
      return times;
    }
    return [...times, time];
  }

  public render() {
    return (
      <div className="App">
        <header className="App__header">
          Timeline App
          <ClockCircleOutlined spin={true} />
        </header>
        <body className="App__Body">
          <Router>
            <div className="App__routes">
              <Switch>
                <Route exact path={"/"} render={() => <Home />} />
                <Route exact path={"/univers"} render={() => <UniversList />} />
                <Route exact path={"/univers"} render={() => <UniversList />} />
                <Route render={() => <Redirect push to={"/"} />} />
              </Switch>
            </div>
          </Router>
        </body>
      </div>
    );
  }
}
