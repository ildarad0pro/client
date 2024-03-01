import React, { useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { createEcosystem } from '../../http/ecosystemAPI';

const CreateEcosystemForm = ({ show, onHide }) => {
    const [name, setName] = useState('');
    const [voiceAssistant, setVoiceAssistant] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('voiceAssistant', voiceAssistant);
            formData.append('img', image);
            const response = await createEcosystem(formData);
            console.log('Ecosystem created:', response);
            onHide(); // Закрываем модальное окно после успешного создания экосистемы
        } catch (error) {
            console.error('Error creating ecosystem:', error);
            // Дополнительная обработка ошибок, если необходимо
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Добавить экосистему</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Название экосистемы:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите название экосистемы"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="voiceAssistant">
                        <Form.Label>Помощник по голосу:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Введите название помощника по голосу"
                            value={voiceAssistant}
                            onChange={(e) => setVoiceAssistant(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="image">
                        <Form.Label>Изображение:</Form.Label>
                        <Form.Control
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
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

export default CreateEcosystemForm;
