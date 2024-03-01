import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TypeBar from "../components/TypeBar";
import DeviceList from "../components/DeviceList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchBrands, fetchDevices} from "../http/deviceAPI";
import {fetchTypes} from "../http/typeAPI";
import Pages from '../components/Pages';

const Shop = observer(() => {
    const {device} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchDevices().then(data => device.setDevices(data.rows))
        fetchDevices(null, null, 1, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchDevices(device.selectedType.id, device.page, 2).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType,])

    return (
        <Container>
        <Row className="mt-2">
            <Col md={3}>
                <TypeBar/>
            </Col>
            <Col md={9}>
                <DeviceList/>
                <Pages/>
            </Col>
        </Row>
    </Container>
    );
});

export default Shop;