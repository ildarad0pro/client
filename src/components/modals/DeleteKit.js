import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { deleteKit } from '../../http/kitAPI';

const DeleteKitForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteKit(id);
            setMessage(response.message);
        } catch (error) {
            console.error('Error deleting kit:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Удалить набор</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID набора:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID набора"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Удалить набор
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default DeleteKitForm;
