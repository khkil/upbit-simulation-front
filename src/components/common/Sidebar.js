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
import IconDashboard from '@material-ui/icons/Dashboard'
import IconShoppingCart from '@material-ui/icons/ShoppingCart'
import IconPeople from '@material-ui/icons/People'
import IconBarChart from '@material-ui/icons/BarChart'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'
import { useHistory } from 'react-router-dom'
import { sidebarRoutes, sidebarRouts } from '../../routes'
import SidebarMenu from './SidebarMenu'
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
const Sidebar = () => {

  return (
    <>
      {sidebarRoutes.map((route, x) => (
        <SidebarMenu route={route} key={x}/>
      ))}
    </>
  )
}

export default Sidebar;
