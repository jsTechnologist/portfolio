import {Box,Divider}from "@mui/material";
import { grey } from "@mui/material/colors";
import {SidebarHeader,SidebarFooter,SidebarTabs} from ".";
const SidebarContent=()=>{
    
    return(
        <Box sx={{justifyContent:"center",textAlign:"center",}}>
            <SidebarHeader/>
                  <Divider variant="middle"color={grey[200]} sx={{mt: 2}}/>
         <SidebarTabs/>
                  <Divider variant="middle"color={grey[200]} sx={{mt: 2}}/>
                  <SidebarFooter/>
                  </Box>
                
    )
}
export default SidebarContent;