import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { updateDevice } from '../../http/deviceAPI';

const UpdateDeviceForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [vendorCode, setVendorCode] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [typeId, setTypeId] = useState('');
    const [info, setInfo] = useState('');
    const [instruction, setInstruction] = useState('');
    const [ecosystemId, setEcosystemId] = useState('');
    const [kits, setKits] = useState('');
    const [controls, setControls] = useState('');
    const [img, setImg] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('vendorCode', vendorCode);
            formData.append('name', name);
            formData.append('price', price);
            formData.append('typeId', typeId);
            formData.append('info', JSON.stringify(info));
            formData.append('instruction', JSON.stringify(instruction));
            formData.append('ecosystemId', ecosystemId);
            formData.append('kits', kits);
            formData.append('controls', controls);
            formData.append('img', img);

            const response = await updateDevice(id, formData);
            setMessage(response.message);
            onHide(); // Закрываем модальное окно после успешного обновления устройства
        } catch (error) {
            console.error('Error updating device:', error);
        }
    };

    const handleFileChange = (e) => {
        setImg(e.target.files[0]);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Обновить устройство</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID устройства:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID устройства"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="vendorCode">
                        <Form.Label>Артикул производителя:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите артикул производителя"
                            value={vendorCode}
                            onChange={(e) => setVendorCode(e.target.value)}
                        />
                    </Form.Group>
                    // Остальные поля формы
                    <Form.Group controlId="name">
                        <Form.Label>Наименование устройства:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите наименование устройства"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Цена устройства:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Введите цену устройства"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="typeId">
                        <Form.Label>ID типа устройства:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID типа устройства"
                            value={typeId}
                            onChange={(e) => setTypeId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="info">
                        <Form.Label>Информация о устройстве:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Введите информацию о устройстве"
                            value={info}
                            onChange={(e) => setInfo(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="instruction">
                        <Form.Label>Инструкция:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Введите инструкцию по устройству"
                            value={instruction}
                            onChange={(e) => setInstruction(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="ecosystemId">
                        <Form.Label>ID экосистемы:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID экосистемы"
                            value={ecosystemId}
                            onChange={(e) => setEcosystemId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="kits">
                        <Form.Label>Идентификаторы наборов (через запятую):</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Введите идентификаторы наборов через запятую"
                            value={kits}
                            onChange={(e) => setKits(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="controls">
                        <Form.Label>Идентификаторы управлений (через запятую):</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Введите идентификаторы управлений через запятую"
                            value={controls}
                            onChange={(e) => setControls(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="img">
                        <Form.Label>Изображение устройства:</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Обновить устройство
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default UpdateDeviceForm;
