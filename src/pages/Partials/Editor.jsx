import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";
import React from "react";
import { Header } from "../../components/components";
import { EditorData } from "../../libs/data/dummy";

function Editor() {
  return (
    <div className="FadeAp m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
      </RichTextEditorComponent>
    </div>
  );
}

export default Editor;
