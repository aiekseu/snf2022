import {
    Card,
    createTheme,
    responsiveFontSizes, Stack,
    ThemeProvider, Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";
import './digitalFont.css';

import logo from '../images/logo.png'
import city from '../images/city-min.png'
import sky from '../images/sky.png'
import sun from '../images/sun.png'
import clouds from '../images/clouds.png'
import bgPattern from '../images/bgPattern.jpg'
import oldButtons from '../images/oldButtons.jpg'
import Countdown from "react-countdown";
import {useState} from "react";

let theme = createTheme({})
theme = responsiveFontSizes(theme);

const CountdownElement = ({number, name}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{width: 130, marginLeft: 6, marginRight: 6}}>
            <Card elevation={4} style={{background: '#011c03'}}>
                <Typography
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        fontFamily: 'digital-clock-font',
                        color: '#00cb0f'
                    }}
                >
                    {number < 10 ? '0' + number : number}
                </Typography>
            </Card>

            <Card elevation={1} style={{background: '#6c0000', marginTop: 12, paddingBottom: 4}}>
                <Typography
                    variant={isMobile ? 'h5' : 'h4'}
                    sx={{
                        color: 'white',
                        textTransform: 'uppercase',
                        fontFamily: "'Shippori Antique', sans-serif;"
                    }}
                >
                    {name}
                </Typography>
            </Card>
        </div>
    )
}

const OldCountdown = () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [daysLeft, setDaysLeft] = useState(0);
    const [hoursLeft, setHoursLeft] = useState(0);
    const [minutesLeft, setMinutesLeft] = useState(0);
    const [secondsLeft, setSecondsLeft] = useState(0);

    const myDate = new Date(2022, 0, 24, 11, 0, 0);

    const countdownLabel = ({days, hours, minutes, seconds, completed}) => {
        setDaysLeft(days)
        setHoursLeft(hours)
        setMinutesLeft(minutes)
        setSecondsLeft(seconds)
        return null
    };

    return (
        <Card
            elevation={2}
            style={{
            backgroundImage: `url(${bgPattern})`,
            backgroundRepeat: 'repeat', padding: 4, marginTop: 8
        }}>
            <Stack direction='row' justifyContent='center' style={{marginTop: 8, marginBottom: 8}}>
                <CountdownElement number={daysLeft} name='day'/>
                <CountdownElement number={hoursLeft} name='hour'/>
                <Typography
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        color: '#00cb0f',
                    }}
                >
                    :
                </Typography>
                <CountdownElement number={minutesLeft} name='min'/>
                <Typography
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        color: '#00cb0f',
                    }}
                >
                    :
                </Typography>
                <CountdownElement number={secondsLeft} name='sec'/>
            </Stack>
            <Countdown
                date={myDate}
                renderer={countdownLabel}
                style={{display: 'none'}}
            />
        </Card>
    )
}

const MainPage = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
            }}>
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
                            // height: isMobile ? '51vw' : '65vh',
                            // width: isMobile ? '90vw' : '115vh',
                            // marginTop: isMobile ? '15vh' : 24,
                            height: 'auto',
                            width: isMobile ? '90vw' : '70vw',
                            marginTop: isMobile ? '5vh' : 24,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            background: '#2c2c2c',
                            padding: 8,
                            // borderWidth: '8px',
                            // borderStyle: 'solid',
                            // borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                            // borderImageSlice: 1,
                            ...streamStyle,
                        }}
                    >
                        {/*<p style={{*/}
                        {/*    height: '100%',*/}
                        {/*    width: '100%',*/}
                        {/*    margin: 0,*/}
                        {/*    textAlign: 'center',*/}
                        {/*    fontSize: '3rem',*/}
                        {/*    lineHeight: isMobile ? '51vw' : '65vh',*/}
                        {/*    color: '#ABC8FF',*/}
                        {/*    fontFamily: 'digital-clock-font',*/}
                        {/*}}>*/}
                        {/*    123 Открыть плеер*/}
                        {/*</p>*/}

                        <Card
                            elevation={2}
                            style={{
                                backgroundImage: `url(${bgPattern})`,
                                backgroundRepeat: 'repeat',
                                padding: 12,
                            }}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    color: 'white',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 600,
                                    background: '#011c03',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Отправляемся в будущее на скорости Санофи Джензайм!
                            </Typography>
                        </Card>

                        <Card
                            elevation={2}
                            style={{
                                backgroundImage: `url(${bgPattern})`,
                                backgroundRepeat: 'repeat',
                                padding: 12,
                                marginTop: 8,
                            }}
                        >
                            <Typography
                                variant='h4'
                                sx={{
                                    color: 'white',
                                    fontFamily: "'Montserrat', sans-serif",
                                    fontWeight: 600,
                                    background: '#011c03',
                                    textTransform: 'uppercase'
                                }}
                            >
                                Вместе совершим пространственно-временной прыжок через:
                            </Typography>
                        </Card>
                        <OldCountdown/>
                        <div style={{
                            width: 300,
                            height: 'auto',
                            marginTop: 16,
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            <img src={oldButtons} alt='buttons' style={{width: '100%', height: '100%'}}/>
                        </div>
                    </animated.div>
                </div>
            </div>
        </ThemeProvider>
    )
        ;
}

export default MainPage;
