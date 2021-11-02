import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemIcon, ListItemText, ListSubheader  } from '@material-ui/core';
import Market from './Market';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
 
});

const AllMarket = () => {
  

  return (
    
      <List component="nav" aria-label="main mailbox folders">
        <ListSubheader>
          <Link style={{marginLeft: "2rem", fontSize: "9px"}}>한글명 <ArrowDropUp/></Link>
          <Link style={{marginLeft: "2rem", fontSize: "9px"}}>현재가 <ArrowDropDown/></Link>
          <Link style={{marginLeft: "1.3rem", fontSize: "9px"}}>전일대비 <ArrowDropUp/></Link>
          <Link style={{marginLeft: "0rem", fontSize: "9px"}}>거래대금 <ArrowDropDown/></Link>
        </ListSubheader>

        <Market/>

      </List>
  );
}

export default AllMarket;