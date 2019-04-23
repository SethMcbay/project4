import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import SpotList from "./components/Spotlist";
import Spot from "./components/Spot"
import "./App.css";
import SpotOne from "./components/SpotOne";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <div>
                        <h1>Surferosa</h1>
                        <div>
                       
                            <Link to={`/spot`}>Spots</Link>
                        </div>

                    </div>

                    <Switch>
                      <Route exact path="/" component={SpotList}/>
                      <Route exact path="/spot" component={Spot}/>
                      <Route exact path="/spot/:spotId" component={SpotOne}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}
export default App;