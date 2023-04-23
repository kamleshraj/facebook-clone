import React,{useState} from 'react'
import {Box, CssBaseline, Stack, createTheme } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from '@emotion/react';

const App=()=>{
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette:{
      mode: mode,
      primary:{
          main:'#3c40c6'
      },
      secondary:{
          main:'#218c74'
      },
      success:{
          main:'#ffb142'
      },
      text:{
          light:'#808e9b',
          main:'#485460',
          dark:'#1e272e'
      }
  },
  typography: {
      subtitle1: {
          fontSize: 12,
      },
      body1: {
          fontWeight: 500,
      },
      header:{
          fontWeight:300,
          fontSize:'1.5rem',
          margin:'25px 0'
      },
      button: {
          fontStyle: 'italic',
      },
      h3:{
          fontFamily: 'Lora, serif',
          fontSize:'3rem',
          fontWeight:'600'
      }
  }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar/>
          <Stack spacing={2} direction={'row'} justifyContent={'space-evenly'}>
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed/>
            <Rightbar/>
          </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
