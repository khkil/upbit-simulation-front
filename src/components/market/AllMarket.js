import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Tabs, Tab, List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader  } from '@material-ui/core';
import Market from './Market';
import { ArrowDropDown, ArrowDropUp, ExpandLess } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    minWidth: "33.3%",
  }
});

const AllMarket = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab className={classes.tab} label="전체" />
        <Tab className={classes.tab} label="보유" />
        <Tab className={classes.tab} label="관심" />
      </Tabs>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        <ListSubheader>
          <Link style={{marginLeft: "2rem", fontSize: "9px"}}>한글명 <ArrowDropUp/></Link>
          <Link style={{marginLeft: "2rem", fontSize: "9px"}}>현재가 <ArrowDropDown/></Link>
          <Link style={{marginLeft: "1.3rem", fontSize: "9px"}}>전일대비 <ArrowDropUp/></Link>
          <Link style={{marginLeft: "0rem", fontSize: "9px"}}>거래대금 <ArrowDropDown/></Link>
        </ListSubheader>

        <Market/>

      </List>
    </Paper>
  );
}

export default AllMarket;