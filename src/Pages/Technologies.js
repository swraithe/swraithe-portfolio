import React from "react";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { techStackDetails } from "../Details";
import appData from './Data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'rgb(0,30,60)',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
 
}));
const SubTitle = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  // backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  fontSize: "32px",
  fontWeight: "700",
  backgroundColor:'#1A2027',
  color: 'yellow',
  padding: '10px',
  marginBottom: '10px'
}));
function Technologies() {
  const {
    // html,
    // css,
    js,
    react,
    vue,
    redux,
    tailwind,
    // bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <SubTitle>Main Skills</SubTitle>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {
              appData.skills.map((item, ix)=>{
                return (
                  <Grid item xs={2} key={ix}>
                    <Item> 
                      <Typography component="legend">{item.name}</Typography>
                      <Rating name="read-only" value={item.rate} readOnly />
                    </Item>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </section>
      <section>
        <SubTitle>Additional Skills</SubTitle>
        <p className="text-content py-2 lg:max-w-3xl">
          Whatelse are you looking for?
        </p>
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
            {
              appData.other_skills.map((item, ix)=>{
                return (
                  <Grid item xs={3} key={ix}>
                    <Item> 
                      <Typography component="legend">{item.name}</Typography>
                      <Rating name="read-only" value={item.rate} readOnly />
                    </Item>
                  </Grid>
                )
              })
            }
          </Grid>
        </Box>
      </section>
    </main>
  );
}

export default Technologies;
