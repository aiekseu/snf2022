import {
    Card, Container,
    createTheme, Grid, IconButton,
    responsiveFontSizes, Slide, Stack,
    ThemeProvider, Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";
import Countdown from "react-countdown";
import {useState} from "react";
import './styles.css';

import logo from '../images/logo.png'
import city from '../images/city-min.png'
import sky from '../images/sky.png'
import sun from '../images/sun.png'
import clouds from '../images/clouds.png'
import CloseIcon from "@mui/icons-material/Close";
import NeonButton from "../components/neonButton";


let theme = createTheme({})
theme = responsiveFontSizes(theme);

const ScheduleElement = ({date, activity}) => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container direction='row' justifyContent='space-between' mt={1} alignItems='center'>
            <Grid item xs={3} md={3} lg={2}>
                <Typography
                    display='inline'
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        fontFamily: 'digital-clock-font',
                        color: '#fff'
                    }}
                >
                    {date} /
                </Typography>
                <Typography
                    display='inline'
                    variant={isMobile ? 'h4' : 'h3'}
                    sx={{
                        fontFamily: 'digital-clock-font',
                        color: '#fff'
                    }}
                >
                    01
                </Typography>
            </Grid>
            <Grid item xs={8} md={9}>
                <Typography
                    variant={isMobile ? 'body1' : 'h5'}
                    sx={{
                        color: 'white',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 300,
                    }}
                >
                    {activity}
                </Typography>
            </Grid>

        </Grid>
    )
}

const MainPage = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [isScheduleOpen, setIsScheduleOpen] = useState(false);

    const logoHeightStyle = useSpring({
        from: {height: isMobile ? 'auto' : '50vh',},
        to: {height: isMobile ? 'auto' : '20vh',},
        delay: 2000,
        config: {duration: 1500}
    })

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: isMobile ? 0 : 1000,
        config: {duration: isMobile ? 1500 : 1000}
    })

    const sunStyle = useSpring({
        from: {top: isMobile ? 100 : -50},
        to: {top: isMobile ? 120 : 20},
        config: {duration: 2000}
    })

    const cloudsStyle = useSpring({
        from: {backgroundPosition: '100vw top',},
        to: {backgroundPosition: '-100vw top',},
        loop: true,
        config: {duration: 60000}
    })

    const streamStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 2,},
        delay: isMobile ? 1500 : 3500,
        config: {duration: 250}
    })

    return (
        <ThemeProvider theme={theme}>
            <div style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
            }}
                 onClick={() => {
                     if (isScheduleOpen)
                         setIsScheduleOpen(false)
                 }}
            >
                <div style={{
                    backgroundImage: `url(${city})`,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'repeat-x',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 4,
                    left: 0,
                    right: 0,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                }}/>
                <animated.img
                    src={sun}
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        overflow: 'hidden',
                        width: isMobile ? '100vw' : 'auto',
                        left: 0,
                        right: 0,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        ...sunStyle
                    }}
                />
                <div style={{
                    backgroundImage: `url(${sky})`,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'repeat-x',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                }}/>
                <animated.div style={{
                    backgroundImage: `url(${clouds})`,
                    backgroundRepeat: 'no-repeat',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 3,
                    ...cloudsStyle,
                }}/>
                <div
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        left: 0,
                        right: 0,
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        zIndex: 5,
                        textAlign: 'center',
                    }}
                >
                    <animated.img
                        src={logo}
                        alt='logo_1'
                        style={{
                            overflow: 'hidden',
                            width: isMobile ? '80vw' : 'auto',
                            ...logoHeightStyle,
                            ...logoOpacityStyle,
                        }}
                    />
                    <animated.div
                        style={{
                            height: isMobile ? '51vw' : '55vh',
                            width: isMobile ? '90vw' : '97vh',
                            marginTop: isMobile ? '15vh' : 24,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            background: '#2c2c2c',
                            padding: 8,
                            borderWidth: '8px',
                            borderStyle: 'solid',
                            borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                            borderImageSlice: 1,
                            visibility: isScheduleOpen ? 'hidden' : 'visible',
                            ...streamStyle,
                        }}
                    >
                        {/*<p style={{*/}
                        {/*    height: '100%',*/}
                        {/*    width: '100%',*/}
                        {/*    margin: 0,*/}
                        {/*    textAlign: 'center',*/}
                        {/*    fontSize: '3rem',*/}
                        {/*    lineHeight: isMobile ? '51vw' : '55vh',*/}
                        {/*    color: '#ABC8FF',*/}
                        {/*    fontFamily: '"Montserrat", sans-serif',*/}
                        {/*    userSelect: 'none',*/}
                        {/*}}>*/}
                        {/*    ►*/}
                        {/*</p>*/}
                        <iframe
                            id="gyq73m"
                            onLoad="fc_load_iframe(this)"
                            width="976"
                            height="549"
                            style={{border: 'none'}}
                            allow={"autoplay; fullscreen"}
                            allowFullScreen />
                    </animated.div>
                    <div style={{height: 24}}/>
                    <div style={{visibility: isScheduleOpen ? 'hidden' : 'visible',}}>
                        <NeonButton text='показать программу' onClick={() => setIsScheduleOpen(true)}/>
                    </div>
                </div>
                <Slide in={isScheduleOpen} direction='up' mountOnEnter unmountOnExit>
                    <div
                        style={{
                            width: '100%',
                            height: '75%',
                            background: 'linear-gradient(90deg, rgba(49,29,107,0.8) 0%, rgba(49,29,107,1) 50%, rgba(49,29,107,0.8) 100%)',
                            position: 'absolute',
                            bottom: 0,
                            zIndex: 10,
                            opacity: 0.9,
                            display: 'flex',
                            alignItems: 'start',
                            overflowY: 'scroll',
                        }}
                        className='schedule'
                    >
                        <IconButton
                            onClick={() => setIsScheduleOpen(false)}
                            sx={{
                                position: 'absolute',
                                top: '2%',
                                right: '4%',
                                color: 'white',
                                height: isMobile ? 32 : 64,
                                width: isMobile ? 32 : 64
                            }}
                        >
                            <CloseIcon sx={{height: isMobile ? 32 : 64, width: isMobile ? 32 : 64}}/>
                        </IconButton>
                        <Container maxWidth='lg'>
                            <div style={{height: isMobile ? 48 : 0}}/>
                            <Stack alignItems='center'>
                                <ScheduleElement date='24'
                                                 activity='Открытие циклового совещания (2-3 часа эфира), погружение в концепцию'/>
                                <ScheduleElement date='25'
                                                 activity='Сессии у франчайзов с 9:00 до 14:00 в зуме'/>
                                <ScheduleElement date='26'
                                                 activity='Сессии у франчайзов с 9:00 до 14:00 в зуме'/>
                                <ScheduleElement date='27'
                                                 activity='Сессии у франчайзов с 9:00 до 14:00 в зуме'/>
                                <ScheduleElement date='28'
                                                 activity='Закрытие циклового совещания с награждением и игрой (1-2 часа эфира)'/>
                            </Stack>
                        </Container>
                    </div>
                </Slide>
            </div>
        </ThemeProvider>
    );
}

export default MainPage;
