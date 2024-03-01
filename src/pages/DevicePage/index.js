import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from "../../http/deviceAPI";
import "./style.css";
import { observer } from "mobx-react";


const DevicePage1 = observer(() => {
    const [device, setDevice] = useState({ info: [], ecosystems: [] }); // Добавляем поле для экосистем
    const { id } = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data));
    }, []);

    return (
        
        <div style={{ display: "inline-block", width: "1920px", background: "white" }} data-ignore="used only for top most containter width">
            <div className="main-content-container">
                <div className="product-card-container">
                    <div className="header-nav-container">
                        <div className="svg-container">
                            <svg viewBox="0 0 14 14" x="0" y="0" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="vuesax/linear/arrow-left" data-node-id="266:607" xmlns="http://www.w3.org/2000/svg">
                                    <g id="arrow-left" data-node-id="266:608">
                                        <path id="Vector_15" data-node-id="266:609" d="M9.36585,12.8065l-4.3466,-4.78c-0.5134,-0.564 -0.5134,-1.488 0,-2.053l4.3466,-4.78" stroke="#292D32" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <p className="back-button-text-style">Назад</p>
                    </div>
                   
                </div>
                <div className="product-details-container">
                    <div className="product-card-container2">
                        <div className="product-info-container">
                            <img src={process.env.REACT_APP_API_URL + device.img} alt="product" className="image-container-style1" />
                        </div>
                        <div className="product-card-container1">
                            <div className="smart-bulb-container">
                                <div className="smart-bulb-description">
                                    <p className="smart-led-bulb-title-text-style">{device.name}</p>
                                </div>
                                <div className="product-gallery-container">
                               
                                {device.ecosystems.map(ecosystem => (
                                  <img key={ecosystem.id} src={`../../assets/${ecosystem.img}`} alt="Ecosystem" className='image-container-styles' />
                                ))}
                                </div>
                            </div>
                            <div className="price-info-container">
                                <p className="price-label">Цена:</p>
                                <p className="price-text-bold">~ {device.price} ₽</p>
                            </div>
                        </div>
                    </div>
                    <div className="product-attributes-container">
                        <div className="vertical-flex-container">
                            <p className="feature-title">Характеристики</p>
                            <div className="feature-section-separator"></div>
                        </div>
                        <div className="vertical-card-container">
                            {device.info.map((info, index) => (
                                <div className="item-info-container center-align-container" key={info.id}>
                                    <p className="product-info-title">{info.title}</p>
                                    <p className="product-code-style">{info.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default DevicePage1;
