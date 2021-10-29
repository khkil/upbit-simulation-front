import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { StarRate, StarOutline } from '@material-ui/icons'


const Market = (market) => {

  return (
    <>
      <ListItem button>
        <ListItemIcon style={{minWidth:30}}>
          <StarOutline />
        </ListItemIcon>
        <ListItemText style={{width: "30%"}} primary="비트코인 에스브이"  />
        <ListItemText style={{width: "30%"}} primary="731,820" />
        <ListItemText style={{width: "20%"}} primary="-0.83" />
        <ListItemText style={{width: "20%"}} primary="3,623,516" />
      </ListItem>

      <ListItem button>
        <ListItemIcon style={{minWidth:30}}>
          <StarOutline />
        </ListItemIcon>
        <ListItemText style={{width: "30%"}} primary="비트코인"  />
        <ListItemText style={{width: "30%"}} primary="73,522,000" />
        <ListItemText style={{width: "20%"}} primary="+0.55%" />
        <ListItemText style={{width: "20%"}} primary="3,623,516" />
      </ListItem>

      <ListItem button>
        <ListItemIcon style={{minWidth:30}}>
          <StarOutline />
        </ListItemIcon>
        <ListItemText style={{width: "30%"}} primary="비트코인 에스브이"  />
        <ListItemText style={{width: "30%"}} primary="731,820" />
        <ListItemText style={{width: "20%"}} primary="-0.83" />
        <ListItemText style={{width: "20%"}} primary="3,623,516" />
      </ListItem>
    </>
 
  )
}

export default Market;