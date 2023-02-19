import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import React from "react";
import { Header } from "../../components/components";
const changeColor = (args, id = "preview") => {
  document.getElementById(id).style.backgroundColor = args.currentValue.hex;
};
function ColorPicker() {
  return (
    <div className="FadeAp m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <h4 className="text-2xl font-semibold mb-4 mt-2">Inline Palette</h4>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changeColor}
            />
          </div>
          <div>
            <h4 className="text-2xl font-semibold mb-4 mt-2">Inline Picker</h4>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={changeColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;
