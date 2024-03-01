import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateDevice from '../components/modals/CreateDevice';
import CreateEcosystemForm from '../components/modals/CreateEcosystem';
import CreateKitForm from '../components/modals/CreateKit';
import CreateType from '../components/modals/CreateType';
import CreateControlForm from '../components/modals/CreateControl';
import DeleteControlForm from '../components/modals/DeleteControl';
import DeleteEcosystemForm from '../components/modals/DeleteEcosystem';
import DeleteDeviceForm from '../components/modals/DeleteDevice';
import DeleteKitForm from '../components/modals/DeleteKit';
import UpdateKitForm from '../components/modals/UpdateKit';
import UpdateDeviceForm from '../components/modals/UpdateDevice';
import UpdateControlForm from '../components/modals/UpdateControl';
import UpdateEcosystemForm from '../components/modals/UpdateEcosystem';
import UpdateTypeForm from '../components/modals/UpdateType';
import DeleteTypeForm from '../components/modals/DeleteType';

const Admin = () => {
    const [typeVisible, setTypeVisible] = useState(false);
    const [deviceVisible, setDeviceVisible] = useState(false);
    const [ecosystemVisible, setEcosystemVisible] = useState(false);
    const [kitVisible, setKitVisible] = useState(false);
    const [controlVisible, setControlVisible] = useState(false);
    const [deleteTypeVisible, setDeleteTypeVisible] = useState(false);
    const [updateTypeVisible, setUpdateTypeVisible] = useState(false);
    const [deleteDeviceVisible, setDeleteDeviceVisible] = useState(false);
    const [updateDeviceVisible, setUpdateDeviceVisible] = useState(false);
    const [deleteEcosystemVisible, setDeleteEcosystemVisible] = useState(false);
    const [updateEcosystemVisible, setUpdateEcosystemVisible] = useState(false);
    const [deleteKitVisible, setDeleteKitVisible] = useState(false);
    const [updateKitVisible, setUpdateKitVisible] = useState(false);
    const [deleteControlVisible, setDeleteControlVisible] = useState(false);
    const [updateControlVisible, setUpdateControlVisible] = useState(false);

    return (
        <Container className='d-flex flex-column'>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setTypeVisible(true)}>
                Добавить тип
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeviceVisible(true)}>
                Добавить устройство
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setEcosystemVisible(true)}>
                Добавить экосистему
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setKitVisible(true)}>
                Добавить набор
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setControlVisible(true)}>
                Добавить управление
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeleteTypeVisible(true)}>
                Удалить тип
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setUpdateTypeVisible(true)}>
                Обновить тип
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeleteDeviceVisible(true)}>
                Удалить устройство
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setUpdateDeviceVisible(true)}>
                Обновить устройство
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeleteEcosystemVisible(true)}>
                Удалить экосистему
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setUpdateEcosystemVisible(true)}>
                Обновить экосистему
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeleteKitVisible(true)}>
                Удалить набор
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setUpdateKitVisible(true)}>
                Обновить набор
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setDeleteControlVisible(true)}>
                Удалить управление
            </Button>
            <Button variant={'outline-dark'} className='mt-2' onClick={() => setUpdateControlVisible(true)}>
                Обновить управление
            </Button>

            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
            <CreateEcosystemForm show={ecosystemVisible} onHide={() => setEcosystemVisible(false)} />
            <CreateKitForm show={kitVisible} onHide={() => setKitVisible(false)} />
            <CreateControlForm show={controlVisible} onHide={() => setControlVisible(false)} />
            <DeleteTypeForm show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
            <UpdateTypeForm show={updateTypeVisible} onHide={() => setUpdateTypeVisible(false)} />
            <DeleteDeviceForm show={deleteDeviceVisible} onHide={() => setDeleteDeviceVisible(false)} />
            <UpdateDeviceForm show={updateDeviceVisible} onHide={() => setUpdateDeviceVisible(false)} />
            <DeleteEcosystemForm show={deleteEcosystemVisible} onHide={() => setDeleteEcosystemVisible(false)} />
            <UpdateEcosystemForm show={updateEcosystemVisible} onHide={() => setUpdateEcosystemVisible(false)} />
            <DeleteKitForm show={deleteKitVisible} onHide={() => setDeleteKitVisible(false)} />
            <UpdateKitForm show={updateKitVisible} onHide={() => setUpdateKitVisible(false)} />
            <DeleteControlForm show={deleteControlVisible} onHide={() => setDeleteControlVisible(false)} />
            <UpdateControlForm show={updateControlVisible} onHide={() => setUpdateControlVisible(false)} />
        </Container>
    );
}

export default Admin;
