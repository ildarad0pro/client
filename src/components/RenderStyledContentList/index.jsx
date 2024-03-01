import RenderStyledContent from "../RenderStyledContent";
import "./style.css";

function RenderStyledContentList({ styledContentDataList }) {
  return (
    <div className="smart-home-control-devices-description1">
      {styledContentDataList.map((data, index) => {
        return <RenderStyledContent {...data} key={index} />;
      })}
    </div>
  );
}

export default RenderStyledContentList;
