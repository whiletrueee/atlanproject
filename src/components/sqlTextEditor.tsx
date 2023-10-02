import React from "react";
import AceEditor from "react-ace";
import Button from "@mui/material/Button";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-terminal";
import "ace-builds/src-noconflict/ext-language_tools";
import { useStore } from "@/zustand/store";
import { dataTitle, sidePanel } from "@/utils/constants";
import SendIcon from "@mui/icons-material/Send";
import toast from "react-hot-toast";

export default function SQLTextEditor(): JSX.Element {
  const {
    queryData,
    updateQueryData,
    updateQueryHistory,
    queryHistory,
    updateTableData,
    updateSidePanel,
    preview,
  } = useStore((state) => state);

  function onChange(newValue: any) {
    updateQueryData({ queryValue: newValue, index: queryData.index });
  }
  const handleShareClick = (
    queryValue: string | undefined,
    tableName: string | undefined
  ) => {
    const encodedQuery = encodeURIComponent(queryValue as string);
    const url = `${window.location.origin}/dashboard?query=${encodedQuery}&table=${tableName}`;

    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast("URL copied to clipboard!", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      })
      .catch((err) => {
        toast.error("unable to copy url");
        window.open(url, "_blank");
      });
  };
  return (
    <div className="textEditArea">
      {preview ? (
        <div className="previewQuery textEditorBox custom-scrollbar">
          {queryData.queryValue}
        </div>
      ) : (
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
      )}
      {!preview && (
        <div className="textEditorMenu">
          <Button
            onClick={() => {
              if (queryHistory.length === 0 || !queryData.queryValue) {
                toast("Select a query from sidepanel to share!", {
                  icon: "⬅️",
                  style: {
                    borderRadius: "10px",
                    background: "#333",
                    color: "#fff",
                  },
                });
                return;
              }
              handleShareClick(
                queryData.queryValue,
                queryHistory[queryData.index!].tableName
              );
            }}
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#B1BEE1",
              color: "black",
              fontSize: "1rem",
              fontWeight: 500,
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#B1BEE1",
                opacity: 0.9,
              },
            }}
          >
            Share <SendIcon fontSize="small" />
          </Button>
          <Button
            onClick={() => {
              if (!queryData.queryValue || queryData.queryValue === "") return;
              const tableName =
                dataTitle[Math.floor(Math.random() * dataTitle.length)];
              updateQueryHistory(queryData.queryValue, tableName);
              updateTableData(tableName);
              updateSidePanel(sidePanel.recentQuery);
            }}
            variant="contained"
            size="medium"
            sx={{
              backgroundColor: "#1e1e1e",
              color: "#fff",
              fontSize: "1rem",
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
      )}
    </div>
  );
}
