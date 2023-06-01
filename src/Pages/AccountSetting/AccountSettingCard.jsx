import * as React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const basicDetails = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Basic Details
      </Typography>
      <br />
      <Box
        sx={{
          width: 900,
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField fullWidth label="First Name" id="fullWidth" />
        <TextField fullWidth label="Last Name" id="fullWidth" />
        <TextField fullWidth label="User Name" id="fullWidth" />
      </Box>
    </CardContent>
  </React.Fragment>
);

const loginInfo = (
  <React.Fragment>
    <CardContent>
      <Typography variant="h5" component="div">
        Login Info
      </Typography>
      <br />
      <Box
        sx={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <TextField fullWidth label="Account Email" id="fullWidth" />
        <TextField fullWidth label="Account Password" id="fullWidth" />
      </Box>
    </CardContent>
  </React.Fragment>
);

const card = (
  <React.Fragment>
    <CardContent sx={{ height: "260px", width: "100%" }}>
      <Typography variant="h6" sx={{ fontSize: 14 }}>
        Account Security
      </Typography>
      <Typography variant="p" component="div">
        Your email is confirmed
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function AccountSettingCard() {
  return (
    // <Box sx={{ flexGrow: 1, gap: "20px" }}>
    //   <Grid container spacing={2}>
    //     <Grid item xs={8}>
    //       <Item>
    //         <Box
    //           sx={{
    //             width: 500,
    //             maxWidth: "100%",
    //             display: "flex",
    //             gap: "20px",
    //             flexDirection: "column",
    //           }}
    //         >
    //           <TextField fullWidth label="First Name" id="fullWidth" />
    //           <TextField fullWidth label="Last Name" id="fullWidth" />
    //           <TextField fullWidth label="User Name" id="fullWidth" />
    //         </Box>
    //       </Item>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Item>xs=4</Item>
    //     </Grid>
    //     <Grid item xs={8}>
    //       <Item>xs=8</Item>
    //     </Grid>
    //   </Grid>
    // </Box>
    <>
      <div
        style={{
          display: "flex",
          gap: "15px",
          flexDirection: "row",
        }}
      >
        <div>
          <Card variant="outlined">{basicDetails}</Card>
        </div>
        <div>
          <Card variant="outlined">{card}</Card>
        </div>
      </div>
      <br />
      <Card variant="outlined">{loginInfo}</Card>
    </>
  );
}
