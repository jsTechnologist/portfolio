import { Typography } from "@mui/material";
// import { KeyboardArrowLeftRounded } from "@mui/icons-material";
// import { deepPurple } from "@mui/material/colors";
const DevInfo = ({ children }) => {
    return (
        <Typography
            variant="body1"
            color="black"
            textAlign="left"
            sx={{ mt: 2 }}
        >
            {children}
            {/* <KeyboardArrowLeftRounded
                sx={{
                    verticalAlign: "bottom",
                    color: "primary.main",
                }}
            /> */}
        </Typography>
    );
};

export default DevInfo;
