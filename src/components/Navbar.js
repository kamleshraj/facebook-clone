import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, IconButton, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import BalanceIcon from '@mui/icons-material/Balance';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import userProfile from '../../src/images/userProfile.jpg'


const Navbar = () => {
    const StyledToolbar =styled(Toolbar)({
        display:'flex',
        justifyContent:'space-between'
    })
    const Search = styled('div')(({theme})=>({
        backgroundColor:'#fff',
        width:'40%',
        borderRadius:'6px',
        padding:'5px 15px',
        '& .MuiInputBase-root':{
            width:'100%'
        }
    }))
    const Icons=styled('div')(({theme})=>({
        gap:'12px',
        [theme.breakpoints.down('sm')]:{
            display:'none'
        }
    }))
    const UserProfile=styled('div')(({theme})=>({
        display:'none',
        alignItems:'center',
        [theme.breakpoints.down('sm')]:{
            display:'flex'
        }
    }))
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
                MUI Logo
            </Typography>
            <BalanceIcon sx={{display:{xs:'block',sm:'none'}}}/>
            <Search>
                <InputBase placeholder='search...'/>
            </Search>
            <Icons>
              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
              </IconButton>

              <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton>
                <Avatar alt='user profile' src={userProfile}/>
              </IconButton>
            </Icons>
            <UserProfile>
                <Avatar alt='user profile' src={userProfile}/>
                <Typography variant='span' paddingLeft={'10px'}>
                    John Salmega
                </Typography>
            </UserProfile>
        </StyledToolbar>
    </AppBar>
  )
}

export default Navbar