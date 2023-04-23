import React,{useState} from 'react';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Fab, IconButton, Typography } from '@mui/material'
import { feedsData } from '../data/Data'
import AddIcon from '@mui/icons-material/Add';
import AddModal from './AddModal';

const Feed = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen  = ()=> setOpen(true)
  return (
    <Box flex={4} p={2}>
      {feedsData.map((item)=>{
        return(
          <Card key={item.id} sx={{marginBottom:'2rem'}} >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor:'parimary.main'}} aria-label="recipe">
              {item.userName.charAt(0)}
            </Avatar>
          }
          title={item.userName}
          subheader={item.date}
        />
        <CardMedia
          component="img"
          image={item.feedImg}
          alt={item.userName}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           {item.desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            {item.icon}
          </IconButton>
          <IconButton aria-label="share">
            {item.share}
          </IconButton>
        </CardActions>
      </Card>
        )
      })}

    <Box sx={{position:'fixed',bottom:'15px',left:'15px'}}>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </Box>
    <AddModal handleOpen={open} handleClose={handleClose}/>
  </Box>
  )
}

export default Feed