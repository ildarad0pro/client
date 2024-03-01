import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const { device } = useContext(Context);

    const handleBrandClick = (brand) => {
        device.setSelectedBrand(brand);
    };

    return (
        <Row className="d-flex">
            {device.brands.map(brand => (
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className='p-3'
                    onClick={() => handleBrandClick(brand)}
                    border={brand.id === device.selectedBrand?.id ? 'danger' : 'light'}  // Compare with selectedBrand
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

export default BrandBar;
