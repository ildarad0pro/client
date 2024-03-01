import SmartHomeDisplay from "../SmartHomeDisplay";
import { theme } from "../../theme";
import "./style.css";

function SmartHomeDisplayRenderer({ smartHomeDisplayOptions }) {
  const smartHomeDisplayStyles = [
    { imgHeight: theme.others.HEIGHT_177CC6, dynamicMarginLeft: theme.spacing.MARGIN_LEFT_17F125 },
    { imgHeight: theme.others.HEIGHT_178087, dynamicMarginLeft: theme.spacing.MARGIN_LEFT_17F125 },
    { imgHeight: theme.others.HEIGHT_178087, dynamicMarginLeft: theme.spacing.MARGIN_LEFT_17F125 },
    { spacingValueMarginRight: theme.spacing.MARGIN_RIGHT_17F4E6, imgHeight: theme.others.HEIGHT_177CC6 },
  ];
  return (
    <div className="smart-home-component-container1">
      {smartHomeDisplayOptions.map((data, index) => {
        return <SmartHomeDisplay {...data} key={index} {...smartHomeDisplayStyles[index]} />;
      })}
    </div>
  );
}

export default SmartHomeDisplayRenderer;
