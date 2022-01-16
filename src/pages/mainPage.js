import {
    Button,
    Container,
    createTheme,
    Grid,
    responsiveFontSizes,
    ThemeProvider,
    Typography,
    useMediaQuery
} from "@mui/material";
import styled from "@emotion/styled";
import {animated, useSpring} from "react-spring";

import logo from '../images/logo.png'
import city from '../images/city.png'
import sky from '../images/sky.png'
import sun from '../images/sun.png'
import clouds from '../images/clouds.png'

let theme = createTheme({})
theme = responsiveFontSizes(theme);

const StreamButton = styled(Button)(({theme}) => ({
    borderRadius: 3,
    borderColor: '#fff',
    borderWidth: 3,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    whiteSpace: 'nowrap',
    textTransform: 'none',
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontWeight: 600,
    color: '#fff',
    [theme.breakpoints.only('xs')]: {
        fontSize: '1.125rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 6,
        marginTop: 6
    },
    [theme.breakpoints.only('sm')]: {
        fontSize: '1.375rem',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginBottom: 12,
        marginTop: 12
    },
    [theme.breakpoints.only('md')]: {
        fontSize: '1.75rem',
        marginRight: 32,
        marginLeft: 32,
        marginBottom: 0,
        marginTop: 0
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        marginRight: 48,
        marginLeft: 48,
        marginBottom: 0,
        marginTop: 0
    },
    boxShadow: "0px 0px 6px 0px rgba(255, 255, 255, 0.6)",
    '&:hover': {
        borderColor: '#fff',
        backgroundColor: 'rgba(161,201,199,0.73)',
        borderWidth: 4,
        boxShadow: "0px 0px 10px 0px rgba(255, 255, 255, 0.6)",
    },
}));

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
        to: {opacity: 1,},
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
                                background: '#311D6B',
                                height: isMobile ? '51vw' : '65vh',
                                width: isMobile ? '90vw' : '115vh',
                                marginTop: isMobile ? '15vh' : 24,
                                marginRight: 'auto',
                                marginLeft: 'auto',
                                border: '8px solid transparent',
                                borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
                                borderImageSlice: 1,
                                ...streamStyle
                            }}
                        >
                            <p style={{
                                height: '100%',
                                width: '100%',
                                margin: 0,
                                textAlign: 'center',
                                fontSize: '3rem',
                                lineHeight: isMobile ? '51vw' : '65vh',
                                color: '#ABC8FF'
                            }}>
                                ►
                            </p>
                        </animated.div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default MainPage;
