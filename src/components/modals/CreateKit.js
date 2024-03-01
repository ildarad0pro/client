import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { createKit } from '../../http/kitAPI';

const CreateKitForm = ({ show, onHide }) => {
    const [typer, setTyper] = useState('');
    const [devices, setDevices] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const kitData = { typer, devices: devices.split(',') };
            const response = await createKit(kitData);
            console.log('Kit created:', response);
            onHide(); // Закрываем модальное окно после успешного создания набора
        } catch (error) {
            console.error('Error creating kit:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Добавить набор</Modal.Title>
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
                    <Button variant="outline-danger" onClick={onHide}>
                        Закрыть
                    </Button>
                    <Button variant="outline-success" type="submit">
                        Добавить
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default CreateKitForm;
