import React from 'react';
import { List, ListIcon, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
// import { 
//     PhoneIcon, 
//     AddIcon, 
//     WarningIcon,
//     Icon
//  } from '@chakra-ui/react'
//  import { AddIcon, WarningIcon } from '@chakra-ui/icons'
 //import { CalendarIcon, } from 'react-icons/md'

function SideBar() {
  return (
    <List color="white">
        <ListItem>
            <NavLink to="/">
                {/* <ListIcon as='CalendarIcon' color="white"/> */}
                DashBoard
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Lastest News">
                Latest News
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/Trending News">
                Trending News
            </NavLink>
        </ListItem>
        <ListItem>
            <NavLink to="/About Us">
                About Us
            </NavLink>
        </ListItem>
    </List>
  )
}

export default SideBar