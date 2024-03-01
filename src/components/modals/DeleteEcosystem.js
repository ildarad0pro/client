import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { deleteEcosystem } from '../../http/ecosystemAPI';

const DeleteEcosystemForm = ({ show, onHide }) => {
    const [id, setId] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await deleteEcosystem(id);
            setMessage(response.message);
        } catch (error) {
            console.error('Error deleting ecosystem:', error);
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Удалить экосистему</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="id">
                        <Form.Label>ID экосистемы:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите ID экосистемы"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Удалить экосистему
                    </Button>
                </Form>
                {message && <p>{message}</p>}
            </Modal.Body>
        </Modal>
    );
};

export default DeleteEcosystemForm;
