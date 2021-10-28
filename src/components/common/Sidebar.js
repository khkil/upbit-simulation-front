import React, { useEffect, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'


import { sidebarRoutes } from '../../routes'
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
