import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, Tabs, Tab, Divider, Box } from '@material-ui/core';
import AllMarket from '../../components/market/AllMarket';
import MarketDetail from '../../components/market/MarketDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  tab: {
    minWidth: "33.3%",
  }
}));



export default function MainPage() {
  const classes = useStyles();

  const [value, setValue] = useState("all");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box width={"65%"} display="inline-block" p={1}>
        <Paper className={classes.paper}>
          <MarketDetail/>
        </Paper>
      </Box>
      <Box width={"35%"} display="inline-block" p={1}>
        <Paper className={classes.paper}>
          <AllMarket/>
        </Paper>
      </Box>
      {/* <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}> 
            <MarketDetail/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab className={classes.tab} value={"all"} label="전체" />
            <Tab className={classes.tab} value={"holding"} label="보유" />
            <Tab className={classes.tab} value={"favorite"}label="관심" />
          </Tabs>
          <Divider />

          <AllMarket/>
          
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
     
      </Grid> */}
    </Container >
  );
}