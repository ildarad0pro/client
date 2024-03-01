import "./style.css";

function SmartHomeDisplay({ imgContent, smartHomeComponentSelectionText, spacingValueMarginRight, imgHeight, dynamicMarginLeft }) {
  return (
    <div className="smart-home-component-container home-component-container">
      <div className="home-component-image-container" style={{ marginRight: spacingValueMarginRight }}>
        <img className="image-container" style={{ height: imgHeight }} src={imgContent} />
      </div>
      <p className="smart-home-component-description-text-style" style={{ marginLeft: dynamicMarginLeft }}>
        {smartHomeComponentSelectionText}
      </p>
    </div>
  );
}

export default SmartHomeDisplay;
