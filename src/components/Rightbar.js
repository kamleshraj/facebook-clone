import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { feedsData } from '../data/Data'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} 
    sx={{display:{xs:'none',sm:'block'}}}
    >
      <Typography variant='header' color={'text.light'} component={'h4'}>
        Online Friends
      </Typography>
      <AvatarGroup max={7}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>

    <Typography variant='header' color={'text.light'} component={'h4'}>
      Latest Photos
    </Typography>
    <ImageList sx={{display:'flex',flexWrap:'wrap'}} >
      {feedsData.map((item)=>{
        return(
          <ImageListItem key={item.id} sx={{flex:'30%'}}>
            <img src={`${item.feedImg}`} loading='lazy' alt={item.name}/>
          </ImageListItem>
        )
      })}
    </ImageList>

    <Typography variant='header' color={'text.light'} component={'h4'}>
      Latest Conversations
    </Typography>

    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {feedsData.map((item)=>{
        return(
          <>
          <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={item.name} src={item.feedImg} />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
        )
      })}
    </List>
    </Box>
  )
}

export default Rightbar