import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import appStore from "./store";
import Home from "./containers/Home";
import NavContainer from "./containers/NavContainer";

const App = (props: any) => (
    <Provider store={appStore.store}>
        <PersistGate loading={null} persistor={appStore.persistor}>
            <Router>
                <NavContainer/>
                <Switch>
                    <Home/>
                </Switch>
            </Router>
        </PersistGate>
    </Provider>
);

export default App;
