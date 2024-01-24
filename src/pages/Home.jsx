import { useEffect, useRef, useCallback } from "react";

import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import  links  from "../constants/particles";
import bg02 from "../assets/bg03.jpeg";

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "من یک توسعه دهنده هستم",
        "من یک فریلنسر هستم",
        "من یک برنامه نویس وب هستم",
    ];

    useEffect(() => {
                const typedInfo = new Typed(infoEl.current, {
            strings: strings,
            startDelay: 1500,
            typeSpeed: 250,
            backSpeed: 50,
            backDelay: 50,
            loop: true,
            showCursor: false,
        });

        return () => {

            typedInfo.destroy();
        };
    }, []);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);
    return (
        <Box
            sx={{
                backgroundImage: `url(${bg02})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {/* <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}/> */}
            <Typography
                ref={infoEl}
                variant="h3"
                color="yellow"
                // sx={{
                //     textDecoration: "underline",
                //     textDecorationColor: "#1976d2",
                // }}
            ></Typography>
        </Box>
    );
};

export default Home;
