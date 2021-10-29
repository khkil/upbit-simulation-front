import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
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
}));

export default function MainPage() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}> 
            <MarketDetail/>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <AllMarket/>
          </Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </Container >
  );
}