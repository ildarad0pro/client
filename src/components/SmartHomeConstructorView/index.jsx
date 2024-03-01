import { Button } from "@mui/base";
import SmartHomeDisplayRenderer from "../SmartHomeDisplayRenderer";
import "./style.css";
import messages from "./messages.json";
import img_183_147_7db5ce from "../../assets/img_183_147_7db5ce.png"

function SmartHomeConstructorView({ smartHomeDisplayOptions }) {
  return (
    <div className="home-constructor-section">
      <div className="smart-home-constructor-section">
        <p className="main-heading-text-style">Конструктор позволяет вам</p>
        <SmartHomeDisplayRenderer smartHomeDisplayOptions={smartHomeDisplayOptions} />
        <div className="builder-button-container">
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="primary-button">Перейти в конструктор</Button>
        </div>
      </div>
      <div className="smart-home-image-container">
        <img
          src= {img_183_147_7db5ce}
          className="hero-image-container"
        />
      </div>
    </div>
  );
}

export default SmartHomeConstructorView;
