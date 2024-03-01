import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { deleteType } from '../../http/typeAPI';

const DeleteTypeForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteType(id);
            setMessage(response.message);
        } catch (error) {
            console.error('Error deleting type:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Удалить категорию</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID категории:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID категории"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Удалить категорию
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default DeleteTypeForm;
