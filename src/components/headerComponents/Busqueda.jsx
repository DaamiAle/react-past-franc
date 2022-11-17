import React from "react";
import { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";


const Busqueda = () => {
    return (
        <Fragment>
            <Row>
                <Col><input type="text" placeholder="Buscar..."/></Col>
            </Row>
        </Fragment>
    );
}

export default Busqueda;