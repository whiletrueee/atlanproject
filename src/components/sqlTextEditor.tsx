import React from "react";
import AceEditor from "react-ace";
import Button from "@mui/material/Button";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { themes } from "@/utils/constants";
import { useStore } from "@/zustand/store";

// themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

export default function SQLTextEditor(): JSX.Element {
  const { queryData, updateQueryData, updateQueryHistory } = useStore(
    (state) => state
  );

  function onChange(newValue: any) {

    updateQueryData(newValue);
  }

  return (
    <div className="textEditArea">
      <div className="textEditorBox custom-scrollbar">
        <AceEditor
          style={{
            backgroundColor: "transparent",
          }}
          value={queryData}
          wrapEnabled={true}
          className="aceEditor"
          placeholder="Enter SQL Query Here..."
          mode="mysql"
          // theme="terminal"
          name="sqleditor"
          width="100%"
          onChange={onChange}
          fontSize={18}
          showGutter={true}
          // debounceChangePeriod={1000}
          highlightActiveLine={true}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 0,
          }}
        />
      </div>
      <div className="textEditorMenu">
        <Button
          onClick={() => {
            console.log(queryData);
            updateQueryHistory(queryData);
          }}
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#1e1e1e",
            color: "#fff",
            fontSize: "0.9rem",
            fontWeight: 500,
            borderRadius: "4px",

            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#1e1e1e",
              opacity: 0.9,
            },
          }}
        >
          Execute Query
        </Button>
      </div>
    </div>
  );
}
