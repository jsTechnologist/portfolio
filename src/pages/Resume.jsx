import { Typography, Card, CardContent, Divider, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector,
} from "@mui/lab";
import {
    SettingsEthernetRounded,
    HomeRepairServiceRounded,
    SchoolRounded,
} from "@mui/icons-material";

import { devEdu } from "../constants/details";
import { devWorkInfo } from "../constants/details";

const Resume = () => {
    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "scroll",
            }}
        >
            <CardContent>
                <Divider
                    textAlign="center"
                    sx={{
                        mt: 2,
                        "&::before, &::after": {
                            borderColor: "error.main",
                        },
                    }}
                >
                    <Chip
                        icon={<SettingsEthernetRounded />}
                        color="error"
                        label={
                            <Typography
                                variant="body1"
                                color="black"
                                sx={{ textAlign: "center" }}
                            >
                                رزومه من
                            </Typography>
                        }
                        sx={{ p: 3 }}
                    />
                </Divider>
                <Grid container sx={{ mt: 4 }}>
                    <Grid xs={6}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "warning.main",
                                },
                            }}
                        >
                            <Chip
                                icon={<HomeRepairServiceRounded />}
                                color="warning"
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        تجربیات
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <Timeline position="right" sx={{ direction: "ltr" }}>
                            {devWorkInfo.map((item, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            color="warning"
                                            variant="outlined"
                                        >
                                            <HomeRepairServiceRounded color="warning" />
                                        </TimelineDot>
                                        {index !== 3 ? (
                                            <TimelineConnector />
                                        ) : null}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography
                                            variant="caption"
                                            color="gray"
                                        >
                                            {item.year}
                                        </Typography>
                                        {/* <Typography
                                            variant="body1"
                                            color="black"
                                        >
                                            {item.cert}
                                        </Typography> */}
                                        {/* <Typography
                                            variant="body2"
                                            color="black"
                                        >
                                            {item.major}
                                        </Typography> */}
                                        {/* <Typography
                                            variant="body2"
                                            color="black"
                                        >
                                            {item.place}
                                        </Typography> */}
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>

                    <Grid xs={6}>
                        <Divider
                            textAlign="center"
                            sx={{
                                "&::before, &::after": {
                                    borderColor: "info.main",
                                },
                            }}
                        >
                            <Chip
                                icon={<SchoolRounded />}
                                color="info"
                                label={
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        sx={{ textAlign: "center" }}
                                    >
                                        تحصیلات
                                    </Typography>
                                }
                                sx={{ p: 3 }}
                            />
                        </Divider>

                        <Timeline position="right" sx={{ direction: "ltr" }}>
                            {devEdu.map((item, index) => (
                                <TimelineItem key={index}>
                                    <TimelineSeparator>
                                        <TimelineDot
                                            color="info"
                                            variant="outlined"
                                        >
                                            <SchoolRounded color="info" />
                                        </TimelineDot>
                                        {index !== 3 ? (
                                            <TimelineConnector />
                                        ) : null}
                                    </TimelineSeparator>
                                    <TimelineContent>
                                        <Typography
                                            variant="caption"
                                            color="gray"
                                        >
                                            {item.year}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            color="black"
                                        >
                                            {item.cert}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="black"
                                        >
                                            {item.major}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="black"
                                        >
                                            {item.place}
                                        </Typography>
                                    </TimelineContent>
                                </TimelineItem>
                            ))}
                        </Timeline>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default Resume;