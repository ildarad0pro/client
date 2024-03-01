import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { deleteControl } from '../../http/controlAPI';

const DeleteControlForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteControl(id);
            setMessage(response.message);
        } catch (error) {
            console.error('Error deleting control:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Удалить управление</Modal.Title>
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
                    <Button variant="danger" type="submit">
                        Удалить управление
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default DeleteControlForm;
