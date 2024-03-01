import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { updateControl } from '../../http/controlAPI';

const UpdateControlForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [protocol, setProtocol] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const controlData = { name, protocol };
            const response = await updateControl(id, controlData);
            setMessage(response.message);
            onHide(); // Закрываем модальное окно после успешного обновления управления
        } catch (error) {
            console.error('Error updating control:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Обновить управление</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID управления:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID управления"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="name">
                        <Form.Label>Новое название управления:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите новое название управления"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="protocol">
                        <Form.Label>Новый протокол:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите новый протокол"
                            value={protocol}
                            onChange={(e) => setProtocol(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Обновить управление
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default UpdateControlForm;
