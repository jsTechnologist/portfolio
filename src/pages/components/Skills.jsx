import {Box,Chip,Divider,LinearProgress,Typography} from "@mui/material";
const Skills=({icon,color,name,value})=>{
    return(
     <>
     <Divider textAlign="right"sx={{"&::before,&::after":{borderColor:`${color}.main`},mt: 3 }}>
      <Chip icon={
        <Box component="img"src={icon}
        sx={{height: 30}}/>
      }
      color={color}label={name}sx={{color:"#000",p:3}}/>
     </Divider>
     <Box sx={{display:"flex",alignItems:"center"}}>
        <Box sx={{minWidth: 35}}>
         <Typography variant="body2"color="black">{Math.round(value)}%</Typography>
        </Box>
        <Box sx={{width:"100%", mr: 1}}>
          <LinearProgress variant="determinate" value={value} color={color}
           sx={{height:10,borderRadius:2,}}/>         
        </Box>
     </Box>
     </>
    )
};
export default Skills;