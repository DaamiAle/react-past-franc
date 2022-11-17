import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "./headerComponents/Button";
import BarraBusqueda from "./headerComponents/Busqueda"

const Header = ({actualPage}) => {
    return (
        <Fragment>
            <Container>
            <Row ><h1>Pasteleria Franccesca</h1></Row>
            <Row>
                <Col><Button texto="Inicio"/></Col>
                <Col><Button texto="Panaderia"/></Col>
                <Col><Button texto="Chocolateria"/></Col>
                <Col><Button texto="Pasteleria"/></Col>
                <Col><Button texto="Contacto"/></Col>
                <Col><BarraBusqueda/></Col>
            </Row>
            </Container>
        </Fragment>
    );
}

export default Header;