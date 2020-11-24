import React from 'react';
import * as PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const ListItem = (props) => {
    const {url} = useRouteMatch();

    return (
        <ListGroup.Item action>
            <LinkContainer to={`${url}/${props.id}`} activeClassName="selected">
                <div>{props.title}</div>
            </LinkContainer>
        </ListGroup.Item>
    )
};

ListItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default ListItem;
