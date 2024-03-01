import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { deleteDevice } from '../../http/deviceAPI';

const DeleteDeviceForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteDevice(id);
            setMessage(response.message);
        } catch (error) {
            console.error('Error deleting device:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Удалить устройство</Modal.Title>
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
                    <Button variant="danger" type="submit">
                        Удалить устройство
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default DeleteDeviceForm;
