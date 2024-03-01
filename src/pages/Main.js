import React, {useContext, useEffect} from 'react';
import {Container} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import SmartHomeProjectBuilder from "../components/SmartHomeProjectBuilder";
import SmartHomeConstructorView from '../components/SmartHomeConstructorView';
import { mockData } from '../mockData';
import SmartHomeDevicesSection from '../components/SmartHomeDevicesSection';
import SmartHomeExplanationBlock from '../components/SmartHomeExplanationBlock';

const Main = observer(() => {

    
    return (
        <Container>
                <SmartHomeProjectBuilder />
                <SmartHomeConstructorView {...mockData} />
                <SmartHomeDevicesSection />
            
                <SmartHomeExplanationBlock {...mockData} />
        </Container>
    );
});

export default Main;