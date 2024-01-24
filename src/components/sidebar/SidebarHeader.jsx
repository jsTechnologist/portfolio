import { Avatar,Typography,Box,IconButton } from "@mui/material";
import { Telegram,GitHub } from "@mui/icons-material";
import { RandomReveal } from "react-random-reveal";
import { alphabetPersian } from "../../constants/alphabetPersian";
import photo  from "../../assets/photo_2024-01-16_09-01-34.jpg";
import ThemeActionButton from "../ThemeActionButton";
const SidebarHeader=()=>{
    return(
        <>
        <ThemeActionButton/>
        <Avatar src={photo}
                    sx={{height:150, width:150, margin:"0 auto",
                    display:{xl:"block",lg:"block",md:"block",sm:"none",xs:"none"}}}>A A</Avatar>
                 <Typography variant="h6"color="secondary" > 
                 <Typography variant="caption" >
                    {" {{ "}
                 </Typography>
                 <RandomReveal isPlaying duration={4} characterSet={alphabetPersian} 
                 characters="علی عرشی"/>
                 <Typography variant="caption" >
                    {" }} "}
                 </Typography>

                  </Typography>
                 <Typography
                  variant="caption"
                  color="whitesmoke" >برنامه نویس و توسعه دهنده</Typography>
              <Box component="div" sx={{ m:"0 auto",textAlign:"center"}}>
                <IconButton aria-label="Github">
                  <a href="https://github.com/nextJsTechnologist"target="_blank"
                  rel="noopener noreferrer">
                    <GitHub sx={{color:"whitesmoke"}}/>
                  </a>
                </IconButton>
                <IconButton aria-label="Telegram">
                  <a href="https://t.me/jsTechnologist"target="_blank"
                  rel="noopener noreferrer">
                    <Telegram sx={{color:"whitesmoke"}}/>
                  </a>
                </IconButton>
                </Box>    
        </>         
    )
}
export default SidebarHeader;