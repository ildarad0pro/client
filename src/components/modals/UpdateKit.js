import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { updateKit } from '../../http/kitAPI';

const UpdateKitForm = ({ show, onHide, kitId }) => {
    const [typer, setTyper] = useState('');
    const [devices, setDevices] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const kitData = { typer, devices: devices.split(',') };
            const response = await updateKit(kitId, kitData);
            console.log('Kit updated:', response);
            // Дополнительная обработка успешного обновления набора, если необходимо
            onHide(); // Закрываем модальное окно после успешного обновления
        } catch (error) {
            console.error('Error updating kit:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Обновить набор</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="typer">
                        <Form.Label>Тип набора:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите тип набора"
                            value={typer}
                            onChange={(e) => setTyper(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="devices">
                        <Form.Label>Идентификаторы устройств (через запятую):</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Введите идентификаторы устройств через запятую"
                            value={devices}
                            onChange={(e) => setDevices(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Обновить набор
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateKitForm;
