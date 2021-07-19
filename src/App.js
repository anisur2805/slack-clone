import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";
import Chat from "./components/Chat";

function App() {
    return (
        <div className="app">
            <Header />
            <AppBody>
              <Sidebar />
                <Router>
                    <Switch>
                        <Route path="/" exact>
                            <Chat />
                        </Route>
                    </Switch>
                </Router>
            </AppBody>
        </div>
    );
}

export default App;

const AppBody = styled.div`
height: 100vh;    
padding-top: 60px;
display: flex;
`
