import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { themes } from "@/utils/constants";

themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

function onChange(newValue: any) {
  console.log("change", newValue);
}

export default function SQLTextEditor(): JSX.Element {
  return (
    <div className="textEditorBox custom-scrollbar">
      <AceEditor
        wrapEnabled={true}
        className="aceEditor"
        placeholder="Enter SQL Query Here..."
        mode="mysql"
        // theme="terminal"
        name="blah2"
        width="100%"
        onChange={onChange}
        fontSize={18}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
