import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import CustomerDetails from "../../contextApi";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "filename", headerName: "Document Name", width: 250 },
  { field: "documenttype", headerName: "Document Type", width: 200 },
  { field: "currentstate", headerName: "Current State", width: 200 },
  { field: "action", headerName: "Action", width: 250 },
];

const DataGridPro = ({ selectedCustomer }) => {
  // const { selectedCustomer } = useContext(CustomerDetails);
  const [docs, setDocs] = useState([]);
  const getRowId = (row) => uuidv4();

  const fetchData = () => {
    let bearer = localStorage.getItem("authorization");

    fetch(
      "https://dev.xlrt.ai/docparser-gateway-api//customers/" +
        selectedCustomer +
        "/docs",
      {
        method: "GET",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed");
        }
      })
      .then((data) => {
        // Handle the response data
        console.log(data.documents);
        setDocs(data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [selectedCustomer]);

  console.log(selectedCustomer, "--------");

  const rows = docs.documents
    ? docs.documents.map((item) => {
        return {
          id: getRowId(item),
          filename: item.filename,
          documenttype: item.documenttype,
          currentstate: item.currentstate,
          action: item.action,
        };
      })
    : [];

  console.log(docs, "documents");
  return (
    <div style={{ height: 500, width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>{selectedCustomer}</div>
        <div>
          <Button variant="contained" size="small">
            Upload Document
          </Button>
        </div>
      </div>
      <br />
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
        getRowId={getRowId}
      />
    </div>
  );
};

export default DataGridPro;
