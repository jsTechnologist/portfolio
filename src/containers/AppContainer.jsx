import { useEffect,useState } from "react";
import PagesContainer from "./PagesContainer";
import {Sidebar} from "../components/sidebar";
import MainLayout from "../layouts/MainLayout";
import Page from "../pages/components/Page";
import { Typography,useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import {Home,About, Resume, Contact} from "../pages";

function AppContainer() {
  const [pageNumber,setPageNumber]=useState(0);
  const [drawerOpen,setDrawerOpen]=useState(false);
  const [mode,setMode]=useState()
  const theme=useTheme();
  const isSmUp=useMediaQuery(theme.breakpoints.up("sm"));
  const prefersDarkMode=useMediaQuery("(prefers-color-scheme:dark)");
  useEffect(()=>{setMode(prefersDarkMode ?"dark":"light")},[]);
  useEffect(()=>{
    if(isSmUp){setDrawerOpen(false);}
  },[isSmUp]);  
  const handlePageNumber=(event,newPage)=>{
    setPageNumber(newPage);
  }
  const handleThemeChange=()=>{
    setMode((prevMode)=>(prevMode==="light"?"dark":"light"));
  }
  return (
    <MainContext.Provider value={{
      pageNumber,
      handlePageNumber,
      handleThemeChange,
      drawerOpen,setDrawerOpen}} >
       <MainLayout mode={mode}>
      <SidebarContainer>
      <Sidebar/>
      </SidebarContainer>
      <DrawerActionButton/>
      <PagesContainer>
      <Page pageNumber={pageNumber} index={0}>
          <Home/>
        </Page>
        <Page pageNumber={pageNumber} index={1}>
        <About/>
        </Page>
        <Page pageNumber={pageNumber} index={2}>
          <Resume/>
        </Page>
        <Page pageNumber={pageNumber} index={3}>
          <Typography variant="h5"sx={{textAlign:"center"}}>نمونه کار </Typography>
        </Page>
        <Page pageNumber={pageNumber} index={4}>
          <Typography variant="h5"sx={{textAlign:"center"}}> نظرات</Typography>
        </Page>
        <Page pageNumber={pageNumber} index={5}>
          <Contact/>
        </Page>
      </PagesContainer>
    </MainLayout>       
    </MainContext.Provider>
    );
};

export default AppContainer;
