import {createTheme, responsiveFontSizes, Stack, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
import {animated, useSpring} from "react-spring";
import Countdown from "react-countdown";
import {useState} from "react";
import './styles.css';

import bg from '../images/bg_countdown.jpg'
import logo from '../images/logo.png'
import moment from "moment-timezone";
import NeonButton from "../components/neonButton";
import {useNavigate} from "react-router-dom";


let theme = createTheme({})
theme = responsiveFontSizes(theme);

const CountdownElement = ({number, name}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <div style={{width: 130, marginLeft: 6, marginRight: 6}}>
            <Typography
                variant={isMobile ? 'h2' : 'h1'}
                sx={{
                    fontFamily: 'digital-clock-font',
                    color: '#fff'
                }}
            >
                {number < 10 ? '0' + number : number}
            </Typography>

            <Typography
                variant={isMobile ? 'h5' : 'h4'}
                sx={{
                    color: 'white',
                    textTransform: 'uppercase',
                    fontFamily: "'Montserrat', sans-serif;",
                    fontWeight: 300,
                }}
            >
                {name}
            </Typography>
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
    let moscowFutureDate = moment(myDate).tz('Europe/Moscow', true);
    let localFutureDate = moscowFutureDate.local();

    const countdownLabel = ({days, hours, minutes, seconds, completed}) => {
        setDaysLeft(days)
        setHoursLeft(hours)
        setMinutesLeft(minutes)
        setSecondsLeft(seconds)
        return null
    };

    return (
        <>
            <Stack direction='row' justifyContent='center' style={{marginTop: 8, marginBottom: 8}}>
                <CountdownElement number={daysLeft} name='day'/>
                <CountdownElement number={hoursLeft} name='hour'/>
                <Typography
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        color: '#fff',
                    }}
                >
                    :
                </Typography>
                <CountdownElement number={minutesLeft} name='min'/>
                <Typography
                    variant={isMobile ? 'h2' : 'h1'}
                    sx={{
                        color: '#fff',
                    }}
                >
                    :
                </Typography>
                <CountdownElement number={secondsLeft} name='sec'/>
            </Stack>
            <Countdown
                date={localFutureDate.toDate()}
                renderer={countdownLabel}
                style={{display: 'none'}}
            />
        </>
    )
}

const CountdownPage = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    let navigate = useNavigate();

    const logoHeightStyle = useSpring({
        from: {height: isMobile ? 'auto' : '50vh',},
        to: {height: isMobile ? 'auto' : '25vh',},
        delay: 2000,
        config: {duration: 1500}
    })

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: isMobile ? 0 : 1000,
        config: {duration: isMobile ? 1500 : 1000}
    })

    const streamStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 2,},
        delay: isMobile ? 1500 : 3500,
        config: {duration: 250}
    })

    const underlineStyle = useSpring({
        from: {marginLeft: -1000,},
        to: {marginLeft: 0,},
        delay: isMobile ? 1500 : 3500,
        config: {duration: 750}
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
                    backgroundImage: `url(${bg})`,
                    backgroundPosition: isMobile ? '80% top' : 'center top',
                    backgroundRepeat: 'repeat-x',
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    left: 0,
                    right: 0,
                    marginRight: 'auto',
                    marginLeft: 'auto',
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
                            marginTop: isMobile ? '6vh' : 0,
                            ...logoHeightStyle,
                            ...logoOpacityStyle,
                        }}
                    />
                    <animated.div
                        style={{
                            height: 'auto',
                            width: isMobile ? '90vw' : '70vw',
                            marginTop: isMobile ? '5vh' : 24,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            padding: 8,
                            ...streamStyle,
                        }}
                    >

                        <Typography
                            display="inline"
                            variant={isMobile ? 'h5' : 'h5'}
                            sx={{
                                color: 'white',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 400,
                                textTransform: 'uppercase',
                            }}
                        >
                            {'Здесь начинается ваша миссия '}
                        </Typography>
                        <Typography
                            display="inline"
                            variant={isMobile ? 'h5' : 'h4'}
                            sx={{
                                color: 'white',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 500,
                                textTransform: 'uppercase',
                            }}
                        >
                            «За гранью будущего»
                        </Typography>
                        <animated.div
                            className='underline'
                            style={{
                                position: 'relative',
                                height: '4px',
                                width: '100%',
                                borderRadius: 12,
                                opacity: 0.9,
                                marginTop: 16,
                                background: 'linear-gradient(to right, rgba(244,64,148,1) 0%, rgba(0,120,240,1) 100%)',
                                boxShadow: '0 0 1px linear-gradient(to right, rgba(244,64,148,1) 0%, rgba(0,120,240,1) 100%),',
                                ...underlineStyle,
                            }}
                        />
                        <Typography
                            variant='h5'
                            sx={{
                                color: 'white',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 400,
                                marginTop: 2
                            }}
                        >
                            Персональный апгрейд Sanofi Genzyme начнется через:
                        </Typography>
                        <Typography
                            variant='h5'
                            sx={{
                                color: 'white',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 200,
                                marginTop: 0
                            }}
                        >
                            The broadcast will start in:
                        </Typography>
                        <OldCountdown/>
                        <div style={{height: 16}}/>
                        <NeonButton text='перейти на трансляцию' onClick={() => navigate('/stream')}/>
                        <Typography
                            variant='body2'
                            sx={{
                                color: '#fff',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: 200,
                                marginTop: 0,
                                textAlign: 'center'
                            }}
                        >
                            *go to the broadcast
                        </Typography>
                    </animated.div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default CountdownPage;
