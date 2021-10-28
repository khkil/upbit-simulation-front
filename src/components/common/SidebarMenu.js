import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import { useHistory } from 'react-router-dom'
import { sidebarRoutes, sidebarRouts } from '../../routes'
import { Typography } from '@material-ui/core'
const drawerWidth = 240
const useStyles = makeStyles(theme =>
  createStyles({
    Sidebar: {
      width: '100%',
    },
    navList: {
      width: drawerWidth,
    },
    menuItem: {
      width: drawerWidth,
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  }),
)
const SidebarMenu = ({ route }) => {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(true)

  console.log(route.icon);
  const handleClick = (e) => {
    setOpen(!open)
  }

  const isDynamicPath = (path) => {
    return path.indexOf(":") > -1;
  }

  const { icon, name } = route;

  return (
    <List component="nav" className={classes.Sidebar} disablePadding >
      <ListItem button onClick={handleClick} className={classes.menuItem}>
        <ListItemIcon className={classes.menuItemIcon}>
          {icon}
        </ListItemIcon>
        <Typography variant="h6" >{name}</Typography>
        {open ? <IconExpandLess /> : <IconExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
          <List component="div" disablePadding>
          {route.children.map(({ path, name }, y) => {
            const fullPath = route.path + path;
            return (
              !isDynamicPath(path) && (
                <ListItem button className={classes.menuItem} key={y} onClick={() => history.push(fullPath)}>
                  <ListItemText inset primary={name} />
                </ListItem>
              )
            )
          })}
        </List>
      </Collapse>
    </List>


    
  )
}

export default SidebarMenu;
