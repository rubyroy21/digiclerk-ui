import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Button, Stack } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { useContext } from "react";
import CustomerDetails from "../../contextApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const DataGridPro = ({ selectedCustomer }) => {
  // const { selectedCustomer } = useContext(CustomerDetails);
  const [docs, setDocs] = useState([]);
  const getRowId = (row) => uuidv4();
  const [docId, setDocId] = useState("")
  const navigate=useNavigate()


  const fetchData = async () => {
    let bearer = localStorage.getItem("authorization");

    //  try {
    //     const response = await axios.get("https://dev.xlrt.ai/docparser-gateway-api//customers/" +
    //     selectedCustomer +
    //     "/docs", {
    //       headers: {
    //         Authorization: bearer,
    //         'Content-Type': 'application/json',
    //       }});
    //       console.log(response)
    //     setDocs(response);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }

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
     const handleButtonClick = (params) => {
    // Access the row data using params.row
    // console.log('Clicked row data:', params.row.id.split("-").join(""));
    const docId =  params.row.id.split("-").join(""); // ID parameter value
    // localStorage.setItem("docId", docId)
    navigate(`/fs/${docId}`);
    // setDocId(params.row.id.split("-").join(""))
  };

        
const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "filename", headerName: "Document Name", width: 250 },
  { field: "documenttype", headerName: "Document Type", width: 200 },
  { field: "currentstate", headerName: "Current State", width: 200 },
  {
    field: 'actions',
    type: 'actions',
    headerName: 'Actions',
    flex: 0.2,
    getActions: (params) => [
      <Button variant="contained" size="small" onClick={handleGetDocId}>
        View XML
      </Button>,
    ],
  },
];

const handleGetDocId = () => {
  console.log(docId)
  navigate(`/fs/${docId}`)
}


   

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
        onCellClick={handleButtonClick}
      />
    </div>
  );
};

export default DataGridPro;
