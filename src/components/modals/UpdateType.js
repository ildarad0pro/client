import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { updateType } from '../../http/typeAPI';

const UpdateTypeForm = ({ show, onHide, typeId }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const typeData = { name };
            const response = await updateType(typeId, typeData);
            console.log('Type updated:', response);
            // Дополнительная обработка успешного обновления типа, если необходимо
            onHide(); // Закрываем модальное окно после успешного обновления
        } catch (error) {
            console.error('Error updating type:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Обновить тип</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Название типа:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите название типа"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Обновить тип
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default UpdateTypeForm;
