import { Button } from "@mui/base";
import "./style.css";
import messages from "./messages.json";

function SmartHomeDevicesCatalog() {
  return (
    <div className="product-categories-container1">
      <div className="smart-home-devices-list">
        <p className="product-category-title">Увлажнители</p>
        <div className="product-categories-container">
          <div className="product-category-list">
            <p className="tea-kettle-heading-text-style">Чайники</p>
            <div className="smart-cameras-container">
              <p className="smart-camera-heading">Умные камеры</p>
            </div>
            <div className="smart-devices-section">
              <p className="relay-switches-style">Реле и выключатели</p>
            </div>
          </div>
          <div className="product-category-list">
            <p className="robot-vacuum-styles">Роботы пылесосы</p>
            <p className="product-card-text-style">Мультиварки</p>
          </div>
        </div>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="catalog-button-style">Перейти в каталог</Button>
    </div>
  );
}

export default SmartHomeDevicesCatalog;
