import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const ListItem = (props: {id?: string, title: string}) => {
    const {url} : {url: string} = useRouteMatch();

    return (
        <ListGroup.Item action>
            <LinkContainer to={`${url}/${props.id}`} activeClassName="selected">
                <div>{props.title}</div>
            </LinkContainer>
        </ListGroup.Item>
    )
};

export default ListItem;
