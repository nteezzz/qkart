import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import "./Header.css";
//import theme from "./theme";
import { useHistory } from "react-router-dom";

const Header = ({ children, hasHiddenAuthButtons}) => {
  let username=localStorage.getItem("username");
  const history=useHistory();
  function logout(){
    localStorage.removeItem("username")
    localStorage.removeItem("balance")
    localStorage.removeItem("token")
    history.push("/products")
    window.location.reload()
  }
  if(hasHiddenAuthButtons)
  {
    return (
      <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Button
          className="explore-button"
          startIcon={<ArrowBackIcon />}
          variant="text"
          onClick={()=>{history.push("/")}}
        >
          Back to explore
        </Button>
      </Box>
    );

  }
  else
  {
    if(localStorage.getItem("username"))
    {
      return(    
        <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Box>
        <Stack direction="row" spacing={2} alignItems='center'>
  <Avatar src="avatar.png" alt={username}> </Avatar>
  <p>{username}</p>
  <Button variant="text" name="logout" className="explore-button" onClick={logout}>
                logout 
        </Button>
</Stack>
        </Box>
        
      </Box>
    );
    
    }
    else
    {
      return(    
        <Box className="header">
        <Box className="header-title">
            <img src="logo_light.svg" alt="QKart-icon"></img>
        </Box>
        {children}
        <Box>
        
        <Button className="explore-button" variant="text" onClick={()=>{history.push("/login")}}>
                Login
        </Button>
        <Button className="button" variant="contained" onClick={()=>{history.push("/register")}}>
                Register 
        </Button>
    
        </Box>
        
      </Box>
    );
    

    }
  }
    
};

export default Header;
