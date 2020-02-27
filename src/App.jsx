import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/landing";
import Option from "./components/option";
import Question from "./components/question";
import NotFound from "./components/notFound";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/test-deploy/" component={Landing} />
                    <Route path="/test-deploy/question" component={Question} />
                    <Route path="/test-deploy/option" component={Option} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}
