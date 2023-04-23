import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { sidebarInfo } from '../data/Data';

const Sidebar = ({mode,setMode}) => {
  return (
    <Box sx={{position:'relative'}}>
    <Box left={'0'} flex={1} p={2} 
    sx={{display:{xs:'none',sm:'block'},position:'sticky',top:'55px'}}
    >
       <List>
        {sidebarInfo.map((item)=>{
          return(
            <ListItem disablePadding key={item.id}>
            <ListItemButton>
              <ListItemIcon sx={{color:'text.main'}}>
                {item.icon} 
              </ListItemIcon>
              <ListItemText primary={item.title} sx={{color:'text.main'}}/>
            </ListItemButton>
          </ListItem>
          )
          })}

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NightlightRoundIcon/>
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    </Box>
  )
}

export default Sidebar