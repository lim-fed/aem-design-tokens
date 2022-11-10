import colours from "../../tokens/figma/tokens.json";
import { useState } from "react";
import { MapTo } from "@adobe/aem-spa-component-mapping";
require("./Colours.scss");

const Colour = (props) => {
  return (
    <div>
      <div className="colour" style={{ backgroundColor: props.colour }}></div>
      <label>{props.label}</label>
    </div>
  );
};

export const Colours = () => {
  const [colorsToRender, setColorsToRender] = useState(colours.global);
  return (
    <div className="colour-container">
      {Object.entries(colorsToRender).map(([name, color]) => (
        <Colour colour={color.value} label={name} />
      ))}
    </div>
  );
};

MapTo("wknd-spa-react/components/colours")(Colours);
