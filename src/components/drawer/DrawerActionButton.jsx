import { useContext } from "react";
import { Box,Fab } from "@mui/material";
import { MenuRounded } from "@mui/icons-material";
import { blue } from "@mui/material/colors";
import MainContext from "../../context";
const DrawerActionButton=()=>{
    const {setDrawerOpen}=useContext(MainContext);
    return(
        <Box sx={{position:"absolute",display:{ xs:"block",sm:"block",md:"none",lg:"none",xl:"none"}}}>
                    <Fab  aria-label="sidebare" size="small"
                     sx={{m: 2, backgroundColor:blue[400]}} onClick={()=>setDrawerOpen(true)}>
                        <MenuRounded/>
                    </Fab>
                </Box>
    )
};
export default DrawerActionButton;