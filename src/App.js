import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

const App=()=>{
  return (
    <>
    <Box>
      <Navbar/>
      <Stack spacing={2} direction={'row'} justifyContent={'space-evenly'}>
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
    </Box>
    </>
  );
}

export default App;
