import "./style.css";
import messages from "./messages.json";

function RenderStyledContent({ htmlContentWithStyledSpans }) {
  return <p className="smart-home-control-devices-description" dangerouslySetInnerHTML={{ __html: htmlContentWithStyledSpans }} />;
}

export default RenderStyledContent;
