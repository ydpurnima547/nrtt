
import React,{useState} from "react";
import { Typography,AppBar,Toolbar,Tabs,Tab } from "@mui/material";

function Npage(){
  const [value,setValue]= useState(0);
 {/* const np= npdata.map((item)=>(<Np1 name={item.name} src={item.src}/>)) */}
   return (
    <>
      <AppBar>
      <Toolbar>
      <Typography variant="h6" color="inherit" component="div">
      Logo
    </Typography>
    <Tabs  sx={{marginLeft:"auto"}} 
    value={value}
    onChange={(e,val)=> setValue(val)}
    textColor="inherit" indicatorColor="secondary">
      <Tab label="Home"/>
      <Tab label="Home"/>
      <Tab label="Home"/>
      <Tab label="Home"/>
      <Tab label="Home"/>
    </Tabs>
  
   {/* <Box  responsive={responsive}>{np}</Box>; import { Typography,AppBar,Button,Toolbar } from "@mui/material";
   <Button variant="contained" color="success" sx={{marginLeft:"auto"}} >Sign</Button>*/}
    </Toolbar>
      </AppBar>
    </>
  )
}
export default Npage;