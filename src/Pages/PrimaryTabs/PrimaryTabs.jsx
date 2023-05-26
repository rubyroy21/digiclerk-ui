import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DataGridPro from "../DataGrid/DataGrid";
import CustomerDetails from "../../contextApi";
import { useState } from "react";
import { useContext } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const PrimaryTabs = (props) => {
  const [value, setValue] = useState(0);
  const { selectedCustomer } = useContext(CustomerDetails);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // console.log(props.selectedCustomerId, "customer");

  return (
    <Box
      sx={{
        // width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f5f5f5",
        borderLeft: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          mt: (theme) => theme.spacing(2.1),
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Customers" {...a11yProps(0)} />
          <Tab label="Assistant" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <DataGridPro selectedCustomer={selectedCustomer} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Assistant
      </TabPanel>
    </Box>
  );
};
