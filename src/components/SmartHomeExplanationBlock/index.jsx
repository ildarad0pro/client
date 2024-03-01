import RenderStyledContentList from "../RenderStyledContentList";
import "./style.css";
import messages from "./messages.json";
import img_45_36_95759c from "../../assets/img_45_36_95759c.png"

function SmartHomeExplanationBlock({ styledContentDataList }) {
  return (
    <div className="smart-home-centralized-control-panel">
      <p className="smart-home-heading-style">Как работает умный дом?</p>
      <p className="central-text-block">{messages["ltbr_gt"]}</p>
      <div className="smart-home-control-devices-container">
        <div className="home-component-image-container">
          <img
            src={img_45_36_95759c}
            className="image-container-1"
          />
        </div>
        <RenderStyledContentList styledContentDataList={styledContentDataList} />
      </div>
    </div>
  );
}

export default SmartHomeExplanationBlock;
