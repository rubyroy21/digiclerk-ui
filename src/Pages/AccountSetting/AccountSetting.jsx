import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Navbar from "../../Container/Navbar/Navbar";
import AccountSettingCard from "./AccountSettingCard";
import Footer from "../../Container/Footer/Footer";
import "./account-setting.css"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function AccountSetting() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ height: "100vh", overflow: "hidden" }}>
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: "86%",
            borderTop: "1px solid #eee",
            width: "100%",
            marginTop: "6.3em",
            overflow: "hidden"
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider", position: "sticky"}}
          >
            <Tab label="Account Settings" {...a11yProps(0)} />
            <Tab label="Billing History" {...a11yProps(1)} />
          </Tabs>
          <TabPanel value={value} index={0} >
            <AccountSettingCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Billing History
          </TabPanel>
        </Box>
        <br />
        <br />
        <Footer />
      </Box>
    </>
  );
}
