import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { createControl } from '../../http/controlAPI';

const CreateControlForm = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [protocol, setProtocol] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const controlData = { name, protocol };
            const response = await createControl(controlData);
            console.log('Control created:', response);
            onHide(); // Закрываем модальное окно после успешного создания контроля
        } catch (error) {
            console.error('Error creating control:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Добавить контроль</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Название контроля:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите название контроля"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="protocol">
                        <Form.Label>Протокол:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите протокол"
                            value={protocol}
                            onChange={(e) => setProtocol(e.target.value)}
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

export default CreateControlForm;
