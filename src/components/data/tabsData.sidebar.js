import { HomeRounded,FaceRounded,TextSnippetRounded,MessageRounded,SensorsRounded,
    TerminalRounded } from "@mui/icons-material";

const tabProps=(index)=>{
    return{id:`sidebar-tab-${index}`,
     "aria-controls":`tabpanel-${index}`   
    } };
 export const tabsData=()=>{
    const tabs=[
        {label:"صفحه اصلی",icon:<HomeRounded/>,...tabProps(0)},
        {label:"درباره من",icon:<FaceRounded/>,...tabProps(1)},
        {label:"رزومه",icon:<TextSnippetRounded/>,...tabProps(2)},
        {label:"نمونه کار",icon:<TerminalRounded/>,...tabProps(3)},
        {label:"نظرات",icon:<MessageRounded/>,...tabProps(4)},
        {label:"ارتباط با من",icon:<SensorsRounded/>,...tabProps(5)},
    ] 
    return tabs; 
 }