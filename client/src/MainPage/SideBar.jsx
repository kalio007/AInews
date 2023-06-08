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
 import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Text
  } from '@chakra-ui/react'

function SideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('left')
  return (
    <List color="white">
        <ListItem>
            <NavLink to="/">
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
        <ListItem>
            <Button colorScheme='blue' onClick={onOpen}>
                Bookmark
            </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <p>Read from the databaseeee</p>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </ListItem>
    </List>
  )
}

export default SideBar