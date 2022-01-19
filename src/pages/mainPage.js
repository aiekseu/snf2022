import {
    Card,
    createTheme,
    responsiveFontSizes, Stack,
    ThemeProvider, Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";
import Countdown from "react-countdown";
import {useState} from "react";
import './digitalFont.css';

import logo from '../images/logo.png'
import city from '../images/city-min.png'
import sky from '../images/sky.png'
import sun from '../images/sun.png'
import clouds from '../images/clouds.png'


let theme = createTheme({})
theme = responsiveFontSizes(theme);

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
                            height: isMobile ? '51vw' : '65vh',
                            width: isMobile ? '90vw' : '115vh',
                            marginTop: isMobile ? '15vh' : 24,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            background: '#2c2c2c',
                            padding: 8,
                            borderWidth: '8px',
                            borderStyle: 'solid',
                            borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                            borderImageSlice: 1,
                            ...streamStyle,
                        }}
                    >
                        <p style={{
                            height: '100%',
                            width: '100%',
                            margin: 0,
                            textAlign: 'center',
                            fontSize: '3rem',
                            lineHeight: isMobile ? '51vw' : '65vh',
                            color: '#ABC8FF',
                            fontFamily: 'digital-clock-font',
                        }}>
                            ->
                        </p>
                    </animated.div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MainPage;
