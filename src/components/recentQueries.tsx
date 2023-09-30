import { formatTime } from "@/utils/formatTime";
import { useStore } from "@/zustand/store";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import { useEffect, useState } from "react";

export default function RecentQueries(): JSX.Element {
  const { queryHistory, updateQueryData } = useStore((state) => state);
  return (
    <div className="recentQueries">
      <div className="recentQueriesList">
        {queryHistory.map((query, index) => {
          return (
            <div
              className="recentQuery custom-scrollbar-recentQuery"
              key={index}
              onClick={() => {
                updateQueryData(query.queryValue);
              }}
            >
              <div className="timeDisplay">{formatTime(query.timestamp)}</div>
              <p className="custom-scrollbar-recentQuery">{query.queryValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
