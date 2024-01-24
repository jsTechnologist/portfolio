import { useEffect,useState } from "react";
import {Box,Typography,Card,CardContent,Divider,Chip,Avatar}from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { CodeRounded,RecyclingRounded } from "@mui/icons-material";
import Skills from "./components/Skills";
import photo from "../assets/photo_2024-01-16_09-01-34.jpg"
import DevInfo from "./components/DevInfo";
import {devSkills} from "../constants/skills";
const About =()=>{
   const [javascript, setJavascript] = useState(0);
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
          setJavascript((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 67);
          });

          setHtml((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 80);
          });

          setCss((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 72);
          });

          setReactJs((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 80);
          });

          setNodeJs((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 59);
          });

          setGit((oldProgress) => {
              const diff = Math.random() * 10;
              return Math.min(oldProgress + diff, 60);
          });
      }, 200);

      return () => {
          clearInterval(timer);
      };
  }, []);

  const{htmlSkill,cssSkill,jsSkill,reactSkill,nodeSkill,gitSkill}=devSkills;
    return(
        <Card sx={{height:"100vh",backgroundColor:"whitesmoke",overflowY:"scroll"}}>
            <CardContent>
              <Grid container sx={{mx: 3 }} >
                <Grid xs={12}sm={12}md={8}lg={8}xl={8}>
                 <Divider textAlign="right" 
                 sx={{"&::before ":{borderColor:"primary.main"}}}>
                   <Chip color="primary" icon={<CodeRounded/>} 
                   label={<Typography variant="body1" color="black"
                   sx={{textAlign:"center"}}>
                   توسعه دهنده ری اکت
                    </Typography> } sx={{p: 3 }}/>
                 </Divider>
                 <DevInfo>نام و نام خانوادگی : علی عرشی</DevInfo>
                 <DevInfo>شهر : اکباتان  </DevInfo>
                 <DevInfo>    سن : ۳۵  </DevInfo>
                 <DevInfo>    ایمیل : aliarhi1812@gmail.com </DevInfo>
                 <DevInfo> موبایل : ۰۹۱۸۳۱۳۰۹۶۷</DevInfo>
                </Grid>
                <Grid xs={0}sm={0}md={4}lg={4}xl={4} >
                  <Avatar src={photo}
                  sx={{height:"250",width:"250",display:{xl:"block",
                  lg:"block",md:"block",sm:"none",xs:"none"}}}>
                    AA
                  </Avatar>
                </Grid>
              </Grid>
             <Grid container>
             <Grid sx={{width:1 ,mt:1}}>
             <Divider textAlign="center"sx={{"&::after ":{borderColor:"purple"}}}>
                   <Chip color="secondary" icon={<RecyclingRounded/>} 
                   label={<Typography variant="body1" color="black"
                   sx={{textAlign:"center"}}>
                      مهارتها 
                    </Typography> } sx={{p: 3 }}/>
                 </Divider>
                 <Skills 
                 name={htmlSkill.name}
                 icon={htmlSkill.icon}
                 color={htmlSkill.color}
                 value={html}/>
                 <Skills 
                 name={cssSkill.name}
                 icon={cssSkill.icon}
                 color={cssSkill.color}
                 value={css}/>
                 <Skills 
                 name={jsSkill.name}
                 icon={jsSkill.icon}
                 color={jsSkill.color}
                 value={javascript}/>
                 <Skills 
                 name={reactSkill.name}
                 icon={reactSkill.icon}
                 color={reactSkill.color}
                 value={reactJs}/>
                 {/* <Skills 
                 name={nodeSkill.name}
                 icon={nodeSkill.icon}
                 color={nodeSkill.color}
                 value={nodeJs}/> */}
                 <Skills 
                 name={gitSkill.name}
                 icon={gitSkill.icon}
                 color={gitSkill.color}
                 value={git}/>
             </Grid>
             </Grid>
            </CardContent>
        </Card>   
    )
};
export default About;