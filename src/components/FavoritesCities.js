import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import { collectCitiesRows } from "../helpers/collectCitiesRows";

const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  {
    field: "city",
    headerName: "City",
    flex: 1,
    editable: true,
  },
  {
    field: "country",
    headerName: "Country",
    flex: 1,
    editable: true,
  },
  {
    field: "request_time",
    headerName: "Request time",
    type: "string",
    flex: 1,
    editable: true,
  },
  {
    field: "weather_description",
    headerName: "Weather description",
    type: "string",
    flex: 1,
    editable: true,
    renderCell: (params) => {
      return (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{params.value.description}</span>
          <img
            src={params.value.icon}
            alt="icon"
            style={{ width: 50, height: 50 }}
          />
        </div>
      );
    },
  },
];

function FavoritesCities({ cities }) {
  const [weather, setWeather] = useState([]);
  const didMountRef = useRef(false);
  useEffect(() => {
    if (didMountRef.current) {
      !cities.length ? setWeather([]) : collectCitiesRows(cities, setWeather);
    }
    didMountRef.current = true;
  }, [cities]);

  return (
    <Box sx={{ height: 350, width: "100%" }}>
      <DataGrid
        rows={weather}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </Box>
  );
}

export default React.memo(FavoritesCities);
