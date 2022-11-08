import { Page, withModel } from "@adobe/aem-react-editable-components";
import React from "react";
import Colours from "./components/Colours/Colours";

// This component is the application entry point
class App extends Page {
  render() {
    return (
      <div>
        {this.childComponents}
        {this.childPages}
        <Colours />
      </div>
    );
  }
}

export default withModel(App);
