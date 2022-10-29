import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockTopfirst, mockTopsecond } from "../../data/mockdash";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useState } from "react";

const Aesel = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns2=[
    { field: "id", headerName: "ID" },
    {
      field: "Zuordnung",
      headerName: "Zuordnung",
      cellClassName: "name-column--cell",
    },
    {
      field: "Titel",
      headerName: "Titel",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "Status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: "Datum",
      headerName: "Datum",
      flex: 1,
    },
    {
      field: "Chance",
      headerName: "Chance",
      flex: 1,
    },
    {
      field: "Gewichtet",
      headerName: "Gewichtet",
      flex: 1,
    },
    {
      field: "Ungewichtet",
      headerName: "Ungewichtet",
      flex: 1,
    },
  ];
 
  return (
    <Box m="20px">
      <Header title="Top 20" subtitle="Forecast" />

      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid rows={mockTopsecond} columns={columns2} components={{ Toolbar: GridToolbar }}/>
      </Box>
    </Box>
  );
};

export default Aesel;