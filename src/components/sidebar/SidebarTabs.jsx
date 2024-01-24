import { Tabs,Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useContext } from "react";
import { brown,grey } from "@mui/material/colors";
import MainContext from "../../context"; 
import {tabsData} from "../data/tabsData.sidebar";
const SidebarTabs=()=>{
    const{pageNumber,handlePageNumber,setDrawerOpen}=useContext(MainContext);
    const theme=useTheme();
    const data= tabsData();
    
    return(
        <Tabs orientation="vertical" variant="scrollable"scrollButtons="auto"
                   allowScrollButtonsMobile value={pageNumber}
                    indicatorColor={theme.palette.mode==="dark"? "secondary":"primary"}
                   textColor={theme.palette.mode==="dark"? "secondary":"primary"}
                    onChange={handlePageNumber}>
                    {data.map((tab,index)=>(
                    <Tab  key={index} label={tab.label} icon={tab.icon}iconPosition="start"
                     sx={{"&.MuiTab-root":{minHeight:50},
                      backgroundColor:theme.palette.mode==="dark"?brown[800]:grey[500],
                      color:"text.primary",
                      mx:1,my:0.3,
                     borderRadius:2}}onClick={()=>setDrawerOpen(false)}{...tab}/>
                    ))}
                    
                  </Tabs>
    )
};
export default SidebarTabs;