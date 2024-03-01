import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Dropdown, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../index";
import { createDevice, fetchDevices } from "../../http/deviceAPI";
import { fetchTypes } from "../../http/typeAPI";
import { fetchEcosystems } from "../../http/ecosystemAPI";
import { fetchControls } from "../../http/controlAPI";
import { observer } from "mobx-react-lite";

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context);
    const [name, setName] = useState('');
    const [vendorCode, setVendorCode] = useState(''); // Добавляем состояние для vendorCode
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [selectedEcosystem, setSelectedEcosystem] = useState(null);
    const [selectedControl, setSelectedControl] = useState(null);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchEcosystems().then(data => device.setEcosystems(data));
        fetchControls().then(data => device.setControls(data));
    }, []);

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number));
    };

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i));
    };

    const selectFile = e => {
        setFile(e.target.files[0]);
    };

    const addDevice = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('vendorCode', vendorCode); // Добавляем vendorCode в объект formData
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info));
        if (selectedEcosystem) {
            formData.append('ecosystemId', selectedEcosystem.id);
        }
        if (selectedControl) {
            formData.append('controlId', selectedControl.id);
        }
        createDevice(formData).then(() => {
            onHide();
            fetchDevices().then(data => device.setDevices(data));
        });
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => device.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedEcosystem ? selectedEcosystem.name : "Выберите экосистему"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.ecosystems && device.ecosystems.length > 0 && device.ecosystems.map(ecosystem =>
                                <Dropdown.Item
                                    onClick={() => setSelectedEcosystem(ecosystem)}
                                    key={ecosystem.id}
                                >
                                    {ecosystem.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{selectedControl ? selectedControl.name : "Выберите способ управления"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.controls && device.controls.length > 0 && device.controls.map(control =>
                                <Dropdown.Item
                                    onClick={() => setSelectedControl(control)}
                                    key={control.id}
                                >
                                    {control.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={vendorCode}
                        onChange={e => setVendorCode(e.target.value)} // Обработчик для изменения vendorCode
                        className="mt-3"
                        placeholder="Введите код поставщика"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>

    );
});

export default CreateDevice;
