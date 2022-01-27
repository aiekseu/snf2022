import {createTheme, responsiveFontSizes, ThemeProvider, useMediaQuery} from "@mui/material";
import {animated, useSpring} from "react-spring";
import './styles.css';

import bg from '../images/final.jpg'
import NeonButton from "../components/neonButton";
import {useNavigate} from "react-router-dom";
import logo from "../images/logo.png";
import bye from "../images/goodbye.png";


let theme = createTheme({})
theme = responsiveFontSizes(theme);

const FinalPage = () => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    let navigate = useNavigate();

    const streamStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
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
                    backgroundPosition: isMobile ? 'center 50%' : 'center 50%',
                    backgroundRepeat: 'repeat',
                    position: 'absolute',
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                }}/>
                <div style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    left: 0,
                    right: 0,
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    zIndex: 5,
                    textAlign: 'center',
                }}>
                    <animated.img
                        src={logo}
                        alt='logo_1'
                        style={{
                            overflow: 'hidden',
                            width: isMobile ? '80vw' : 'auto',
                            height: isMobile ? 'auto' : '25vh',
                            marginTop: '10vh',
                            zIndex: 1,
                            ...streamStyle,
                        }}
                    />
                    <animated.img
                        src={bye}
                        alt='byebye'
                        style={{
                            position: 'absolute',
                            top: isMobile ? '30%' : '30%',
                            left: isMobile ? '45%' : "50%",
                            overflow: 'hidden',
                            width: isMobile ? '60vw' : 'auto',
                            height: isMobile ? 'auto' : '25vh',
                            zIndex: -1,
                            ...streamStyle,
                        }}
                    />
                </div>
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
                    <animated.div
                        style={{
                            height: 'auto',
                            width: isMobile ? '90vw' : '70vw',
                            marginTop: '70vh',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            padding: 8,
                            ...streamStyle,
                        }}
                    >
                        <NeonButton text='Завершить' onClick={() => navigate('/result')}/>
                    </animated.div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default FinalPage;
