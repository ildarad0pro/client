import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import TableWithProducts from '../components/Catalog';



const Catalog = observer(() => {

    
    return (
        <Container>
            <TableWithProducts/>
        </Container>
    );
});

export default Catalog;