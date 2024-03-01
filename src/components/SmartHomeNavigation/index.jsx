import { Button } from "@mui/base";
import "./style.css";
import intelo from "../../assets/intelo.svg";

function SmartHomeNavigation() {
  return (
    <div className="main-navigation-container">
      <div className="header-nav-container1">
        <div className="header-nav-container-footer">
          <div className="navigation-links-container1">
            <p className="navigation-link">Главная</p>
            <p className="navigation-link">Каталог</p>
            <p className="navigation-link">Конструктор</p>
            <p className="navigation-link">О нас</p>
          </div>
          <div className="sidebar-image-container">
            <img
              src={intelo}
              className="boxy-image-container"
            />
          </div>
        </div>
        <div className="sidebar-navigation">
          {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
          <Button className="constructor-button">Перейти в конструктор</Button>
        </div>
      </div>
      <div className="navbar-divider" />
    </div>
  );
}

export default SmartHomeNavigation;
