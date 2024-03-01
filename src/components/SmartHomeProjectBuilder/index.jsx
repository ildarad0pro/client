import { Button } from "@mui/base";
import SmartHomeBuilder from "../SmartHomeBuilder";
import SmartHomeImage from "../SmartHomeImage";

import "./style.css";
import messages from "./messages.json";


function SmartHomeProjectBuilder() {
  return (
    <div className="smart-home-builder1">
      <div className="smart-home-constructor-main-section">
        <p className="smart-home-title-text-style">Конструктор умного дома</p>
        <SmartHomeBuilder />
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="smart-home-project-button">Создать свой проект</Button>
      </div>
      <SmartHomeImage />
       
    </div>
  );
}

export default SmartHomeProjectBuilder;
