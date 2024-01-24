import { createTheme } from "@mui/material/styles";
 export const lightTheme=createTheme({
    direction:"rtl",
    palette:{
        mode:"light",
        primary:{
            main:"#8BE9FD"
        },
        secondary:{
            main:"#BD93F9"
        }
    },
    typography:{
     fontFamily:"vazir,roboto",
    },
    
 });
 export const darkTheme=createTheme({
    direction:"rtl",
    palette:{
        mode:"dark",
        primary:{
            main:"#8BE9FD"
        },
        secondary:{
            main:"#BD93F9"
        }
    },
    typography:{
     fontFamily:"vazir,roboto",
    },
    
 });

 