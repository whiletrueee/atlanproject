import React from "react";
import AceEditor from "react-ace";
import Button from "@mui/material/Button";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { useStore } from "@/zustand/store";
import { dataTitle } from "@/utils/constants";

// themes.forEach(theme => require(`ace-builds/src-noconflict/theme-${theme}`));

export default function SQLTextEditor(): JSX.Element {
  const {
    queryData,
    updateQueryData,
    updateQueryHistory,
    queryHistory,
    updateTableData,
  } = useStore((state) => state);

  function onChange(newValue: any) {
    updateQueryData({ queryValue: newValue, index: queryData.index });
  }

  return (
    <div className="textEditArea">
      <div className="textEditorBox custom-scrollbar">
        <AceEditor
          style={{
            backgroundColor: "transparent",
          }}
          value={queryData.queryValue}
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
            const tableName =
              dataTitle[Math.floor(Math.random() * dataTitle.length)];
            updateQueryHistory(queryData.queryValue, tableName);
            updateTableData(tableName);
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
