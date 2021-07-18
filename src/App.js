import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <AppBody>
              <Sidebar />
                <Router>
                    <Switch>
                        <Route path="/" exact></Route>
                    </Switch>
                </Router>
            </AppBody>
        </div>
    );
}

export default App;

const AppBody = styled.div`
`
