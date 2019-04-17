import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import ArtistList from "./components/SpotList";
import Artist from "./components/Spot";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Surferosa</h1>
                        <div>
                            <div><Link to="/">All Spots</Link></div>
                        </div>
                    </div>

                    <Switch>
                      <Route exact path="/" component={SpotList}/>
                      <Route path="/Spot/:id" component={Spot}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;