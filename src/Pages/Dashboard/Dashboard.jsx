import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../Container/Navbar/Navbar";
import {
  List,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Toolbar,
  ListItem,
  Stack,
} from "@mui/material";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import { PrimaryTabs } from "../PrimaryTabs/PrimaryTabs";
import CustomerDetails from "../../contextApi";
import Footer from "../../Container/Footer/Footer";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Dashboard = () => {
  const { selectedCustomer } = useContext(CustomerDetails);
  const [loading, setLoading] = useState(false);
  const [customerDetails, setCustomerDetails] = useState([]);
  let bearer = localStorage.getItem("authorization");

  const getAllCustomerDetails = async () => {
    setLoading(true);
    //  try {
    //     const response = await axios.get('https://dev.xlrt.ai/docparser-gateway-api//customers?findWithDocs=false', {
    //       headers: {
    //       Authorization: bearer,
    //       "Content-Type": "application/json",
    //     },
    //     });
    //       setCustomerDetails(response);
    //     setLoading(false);
    //   } catch (error) {
    //     console.error('Error fetching data:', error);
    //   }
    await fetch(
      `https://dev.xlrt.ai/docparser-gateway-api//customers?findWithDocs=false`,
      {
        method: "GET",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setCustomerDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    getAllCustomerDetails();
  }, []);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          width: "100%",
          paddingTop: "6.5em",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "20%",
            boxSizing: "border-box",
          }}
        >
          <SideNav />
          <CustomerSidePanel
            customerDetails={customerDetails}
            loading={loading}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "100%",
          }}
        >
          <Stack sx={{ width: "100%" }}>
            <PrimaryTabs selectedCustomerId={selectedCustomer} />
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "20%",
            boxSizing: "border-box",
            borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        ></Box>
      </Box>
      <br />
      <br />
      <Footer />
    </div>
  );
};

const SideNav = () => {
  return (
    <Box
      sx={{
        width: (theme) => theme.spacing(8),
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        boxSizing: "border-box",
        borderRight: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          height: (theme) => theme.spacing(8),
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton
          color="primary"
          size="medium"
          sx={{
            borderRadius: 2,
          }}
        >
          <FolderRoundedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

const CustomerSidePanel = (props) => {
  const { setSelectedCustomer } = useContext(CustomerDetails);

  const handleCustomerDetails = (value) => {
    setSelectedCustomer(value.customerId);
  };

  return (
    <Box
      sx={{
        width: (theme) => `calc(100% - ${theme.spacing(8)})`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar
        sx={{
          pl: (theme) => `${theme.spacing(2)} !important`,
          pr: (theme) => `${theme.spacing(2)} !important`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Autocomplete
          id="free-solo-demo"
          freeSolo
          options={props.customerDetails.data?.map(
            (option) => option.customerId
          )}
          renderInput={(params) => (
            <TextField {...params} label="Search Customer" />
          )}
          style={{
            width: 250,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Toolbar>
      <Box
        sx={{
          overflowY: "overlay",
          "&::-webkit-scrollbar": {
            width: "0.5rem",
            height: "0.5rem",
          },
          "&:hover": {
            "&::-webkit-scrollbar-thumb": {
              display: "block",
            },
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            borderRadius: "10px",
            height: "2rem",
            width: "2rem",
            display: "none",
          },
        }}
      >
        {props.loading ? (
          <h4>Loading....</h4>
        ) : (
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              position: "relative",
              overflow: "auto",
              maxHeight: 500,
              "& ul": { padding: 0 },
              cursor: "pointer",
            }}
            subheader={<li />}
          >
            {props.customerDetails.data?.map((el, i) => (
              <ListItem key={i}>
                <ListItemText
                  primary={el.customerId}
                  primaryTypographyProps={{ sx: { fontSize: 14 } }}
                  onClick={() => handleCustomerDetails(el)}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Box>
  );
};

export { Dashboard, SideNav };
