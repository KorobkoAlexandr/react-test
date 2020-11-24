import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Route, Switch, useLocation, useParams } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import VehiclesList from "../components/VehiclesList";
import Details from "./Details";
import StarshipsList from "../components/StarshipsList";

const Home = (props) => {
    const { pathname } = useLocation();
    const { id } = useParams();
    return (
        (
            <Route path="/">
                <Nav variant="tabs" defaultActiveKey="/vehicles" activeKey={pathname}>
                    <Nav.Item>
                        <Nav.Link eventKey={pathname.includes('vehicles') && pathname}>
                            <LinkContainer to="/vehicles" activeClassName="selected">
                                <div>Vehicles {id}</div>
                            </LinkContainer>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={pathname.includes('starships') && pathname}>
                            <LinkContainer to="/starships" activeClassName="selected">
                                <div>Starships</div>
                            </LinkContainer>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Switch>
                    <Route exact path="/vehicles">
                        <VehiclesList/>
                    </Route>
                    <Route exact path="/vehicles/:id">
                        <Details/>
                    </Route>
                    <Route path="/starships">
                        <StarshipsList/>
                    </Route>
                    <Route exact path="/starships/:id">
                        <Details/>
                    </Route>
                </Switch>
            </Route>
        )
    )
};

export default Home;
