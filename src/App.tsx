import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.scss'
import Accueil from './components/accueil/Accueil'
import Compte from './components/compte/Compte'
import Auteur from './components/auteur/Auteur'
import TopBar from './components/site/top-bar/TopBar'
import Menu from './components/site/menu/Menu'
import Footer from './components/site/footer/Footer'
import Lecteur from './components/lecteur/Lecteur'
import Inscription from './components/inscription/Inscription'
import Magasin from './components/magasin/Magasin'
import Oeuvre from './components/oeuvre/Oeuvre'
import Connexion from './components/connexion/Connexion'
import Tile, { ETileTheme } from './modules/visuel/tile/Tile'

interface IProps {}

interface IState {}

class App extends Component<IProps, IState> {
  render() {
    return (
      <div className="App">
        <Router>
          <TopBar />
          <div className="App__Body">
            <Menu />
            <div className="App__Body__Content">
              <Switch>
                <Route exact path={'/'} render={() => <Accueil />} />
                <Route
                  exact
                  path={'/inscription'}
                  render={() => <Inscription />}
                />
                <Route exact path={'/connexion'} render={() => <Connexion />} />
                <Route
                  exact
                  path={'/compte/me'}
                  render={({ match }) => <Compte id={match.params.id} />}
                />
                <Route
                  exact
                  path={'/compte/:id'}
                  render={({ match }) => <Compte id={match.params.id} />}
                />
                <Route path={`/auteur/me`} render={() => <Auteur />} />
                <Route
                  path={`/auteur/:id`}
                  render={({ match }) => <Auteur id={match.params.id} />}
                />

                <Route path={`/lecteur/me`} render={() => <Lecteur />} />
                <Route
                  path={`/lecteur/:id`}
                  render={({ match }) => <Lecteur id={match.params.id} />}
                />
                <Route
                  path={`/oeuvre/:id`}
                  render={({ match }) => <Oeuvre id={match.params.id} />}
                />

                <Route exact path={'/magasin'} render={() => <Magasin />} />
              </Switch>
            </div>
          </div>
          <div className="App__footer">
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
