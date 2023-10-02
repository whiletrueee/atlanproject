import { formatTime } from "@/utils/formatTime";
import { useStore } from "@/zustand/store";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import { useEffect, useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import Tooltip from "@mui/material/Tooltip";
import { sidePanel } from "@/utils/constants";

export default function QueriesList(): JSX.Element {
  const {
    queryHistory,
    updateQueryData,
    updateFavorite,
    updateTableData,
    sidePanel: menuOption,
  } = useStore((state) => state);
  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);
  return (
    <div className="recentQueries">
      <div className="recentQueriesList">
        {queryHistory
          .filter((item: { isFavourite: any }) => {
            if (menuOption.activeMenu === sidePanel.favoriteQuery) {
              return item.isFavourite;
            } else {
              return true;
            }
          })
          .map((query, index) => {
            return (
              <div
                className="recentQuery custom-scrollbar-recentQuery"
                key={index}
                onClick={() => {
                  updateQueryData({
                    queryValue: query.queryValue,
                    index: index,
                  });
                  updateTableData(queryHistory[index].tableName);
                }}
              >
                <div className="recentQueryItemMenu">
                  <span>{formatTime(query.timestamp)} ago</span>
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
                <p className="custom-scrollbar-recentQuery">
                  {query.queryValue}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
