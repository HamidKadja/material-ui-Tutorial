import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, Container} from '@mui/material';
import React from 'react';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useHistory, useLocation } from 'react-router';
import {AppBar, Toolbar, Avatar} from '@mui/material'
import { format } from 'date-fns'

const drawerWidth = '240px'
const drawerPaper = drawerWidth
const active = {background:'#f4f4f4'}

const Layout = ({ children }) => {
    
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color='secondary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlinedIcon color='secondary' />,
            path: '/create'
        }
    ]
    return ( 
        <div style={{display: "flex"}}  >
            {/* app bat */}
            <AppBar
                sx={{
                    width: `calc(100% - ${drawerWidth})`
                }}
                elevation={0}
            >
                <Toolbar>
                    <Typography sx={{flexGrow: 1}}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Mario
                    </Typography>
                    <Avatar sx={{marginLeft:2}} src="/mario-av.png" />
                </Toolbar>
            </AppBar>
            {/* side drawer */}
            <Drawer
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerPaper
                    }
                }}
                variant='permanent'
                anchor='left'
            >
                <div>
                    <Typography 
                        sx={{padding:3}}
                        variant='h5'
                    >
                        Ninja Notes
                    </Typography>

                    <List>
                        <ListItem>
                            <ListItemText primary='hello'/>
                        </ListItem>
                    </List>
                </div>
                {/* Liste / Links  */}

                <List>
                    {menuItems.map(item=>(
                        <ListItem
                            sx={location.pathname === item.path ? active : null}
                            button
                            key={item.text}
                            onClick={()=> history.push(item.path)}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>

            <div
                style={{background:'#f9f9f9',width:'100%',padding:'24px'}}
            >
                <Toolbar />
                {children}
            </div>
        </div>
     );
}

export default Layout;