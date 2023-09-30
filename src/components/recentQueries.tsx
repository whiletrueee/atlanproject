import { formatTime } from "@/utils/formatTime";
import { useStore } from "@/zustand/store";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";

export default function RecentQueries(): JSX.Element {
  const { queryHistory, updateQueryData, updateFavorite } = useStore(
    (state) => state
  );
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);
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
              <div className="recentQueryItemMenu">
                <span>{formatTime(query.timestamp)}</span>
                <Tooltip
                  placement="top"
                  title={
                    query.isFavourite
                      ? "Click to remove from favorites!"
                      : "Star this query for quick access!"
                  }
                  arrow
                >
                  <span>
                    <StarIcon
                      onClick={() => {
                        updateFavorite(index);
                      }}
                      sx={{
                        color: query.isFavourite ? "#FFD600" : "#D5DBEB",
                        ":hover": {
                          color: "#FFD600",
                        },
                      }}
                    />
                  </span>
                </Tooltip>
              </div>
              <p className="custom-scrollbar-recentQuery">{query.queryValue}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
