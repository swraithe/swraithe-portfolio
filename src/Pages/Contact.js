import React from "react";
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

import { contactDetails } from "../Details";

const Item = styled(Paper)(({ theme }) => ({
  // display: "flex",
  // justifyContent: "center",
  // alignItems: "center", 
  marginTop: '20px', 
  width: '100%', 
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(0,30,60)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  height: "500px",
  lineHeight:"200px"
  // alignItems: 'center'
}));

function Contact() {
  const { address, email, phone } = contactDetails;
  return (
    <main className="container mx-auto my-auto max-width section">
      <h1 className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold">
        Always online
      </h1>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          <Grid item xs={4}>
            <Item> 
              <LocationOnIcon fullWidth style={{margin:"30px"}}/>
              <Typography variant="h4" component="legend">Address</Typography>
              <Typography variant="h6" component="legend">{address}</Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item> 
              <EmailIcon fullWidth style={{margin:"30px"}}/>
              <Typography variant="h4" component="legend">Email</Typography>
              <Typography variant="h6" component="legend"><a href={`mailto:${email}`}>{email}</a></Typography>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item> 
              <PhoneInTalkIcon fullWidth style={{margin:"30px"}}/>
              <Typography variant="h4" component="legend">Phone</Typography>
              <Typography variant="h6" component="legend"><a href={`tel:${phone}`}>{phone}</a></Typography>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default Contact;
