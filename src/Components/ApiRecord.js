import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const ApiRecord = ({props}) => {
    return (<>
        <Card style={{ width: '12rem' }}>

            <Card.Body>
                <Card.Title>{props.name}</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.phone}</ListGroupItem>
                <ListGroupItem>{props.username}</ListGroupItem>
                <ListGroupItem>{props.website}</ListGroupItem>
                <ListGroupItem>{props.email}</ListGroupItem>
                <ListGroupItem>{props.company.name}</ListGroupItem>
            </ListGroup>

        </Card>
    </>)
}

export default  ApiRecord;