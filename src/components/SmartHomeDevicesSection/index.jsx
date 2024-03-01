import SmartHomeDevicesCatalog from "../SmartHomeDevicesCatalog";
import "./style.css";
import messages from "./messages.json";

function SmartHomeDevicesSection() {
  return (
    <div className="smart-home-catalog-layout">
      <div className="smart-home-devices-section">
        <p className="smart-home-devices-heading">Тысячи устройств для умного дома</p>
        <p className="smart-home-device-description1">Для проектирования в конструкторе имеется более тысячи устройств различных категорий </p>
      </div>
      <SmartHomeDevicesCatalog />
    </div>
  );
}

export default SmartHomeDevicesSection;
