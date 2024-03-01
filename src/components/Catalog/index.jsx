import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import img1 from "../../assets/img_111_15_c3f056.svg";
import img2 from "../../assets/img_111_33_aad5c3.svg";
import img3 from "../../assets/img_111_37_9356af.svg";
import img4 from "../../assets/img_111_41_765a64.svg";
import img5 from "../../assets/img_111_45_694578.svg";
import img6 from "../../assets/img_116_56_5b2055.svg";
import img7 from "../../assets/img_116_60_909187.svg";
import img8 from "../../assets/img_116_64_4a794e.svg";
import img9 from "../../assets/img_116_68_1f1300.svg";
import img10 from "../../assets/img_116_72_2d5d98.svg";
import img11 from "../../assets/img_126_5_b1abf7.png";
import img12 from "../../assets/img_126_9_cc8b9f.png";
import img13 from "../../assets/img_126_25_d0548a.png";
import img14 from "../../assets/img_126_53_35a02f.png";
import img15 from "../../assets/img_126_27_fb3768.png";
import img16 from "../../assets/img_126_35_2db8f1.png";
import img17 from "../../assets/img_126_63_6831e5.png";

function TableWithProducts() {
    const data = [
        { id: 1, image: img1, text: 'Лампочки', link: '/lamp' },
        { id: 2, image: img2, text: 'Розетки', link: '/sockets' },
        { id: 3, image: img3, text: 'Датчики', link: '/sensors' },
        { id: 4, image: img4, text: 'Светодиодные ленты', link: '/led-strips' },
        { id: 5, image: img5, text: 'Выключатели и реле', link: '/switches-relays' },
        { id: 6, image: img6, text: 'Хабы и пульты', link: '/hubs-remotes' },
        { id: 7, image: img7, text: 'Камеры видеонаблюдения', link: '/surveillance-cameras' },
        { id: 8, image: img8, text: 'Телевизоры', link: '/tv-sets' },
        { id: 9, image: img9, text: 'Кондиционеры', link: '/air-conditioners' },
        { id: 10, image: img10, text: 'Роботы-пылесосы', link: '/robot-vacuums' },
        { id: 11, image: img11, text: 'Очистители и увлажнители', link: '/cleaners-humidifiers' },
        { id: 12, image: img12, text: 'Терморегуляторы для теплого пола и систем отопления', link: '/floor-thermostat-heating-systems' },
        { id: 13, image: img13, text: 'Чайники и термопоты', link: '/kettles-thermoses' },
        { id: 14, image: img14, text: 'Станции с ассистентом', link: '/assistant-stations' },
        { id: 15, image: img15, text: 'Карнизы и моторы для штор', link: '/curtain-rods-motors' },
        { id: 16, image: img16, text: 'Дверной замок', link: '/door-lock' },
        { id: 17, image: img17, text: 'Другое', link: '/other' }
    ];

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {data.map(item => (
            <Link key={item.id} to={item.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="lampshade-container" style={{ width: '278px', margin: '20px' }}>
                    <p className="lampshade-text-style">{item.text}</p>
                    <div className="image-container">
                        <img src={item.image} alt={`Image ${item.id}`} className="image-container-with-shadow" />
                    </div>
                </div>
            </Link>
        ))}
    </div>
    );
}

export default TableWithProducts;
