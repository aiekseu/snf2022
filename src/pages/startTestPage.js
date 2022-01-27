import {createTheme, responsiveFontSizes, ThemeProvider, Typography, useMediaQuery} from "@mui/material";
import {animated, useSpring} from "react-spring";
import './styles.css';

import bg from '../images/bg_countdown.jpg'
import logo from '../images/logo.png'
import NeonButton from "../components/neonButton";
import {useNavigate} from "react-router-dom";


let theme = createTheme({})
theme = responsiveFontSizes(theme);

const StartTest = () => {

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
                        overflowX: 'hidden',
                        overflowY: 'scroll',
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
                            width: isMobile ? '90vw' : '60vw',
                            marginTop: isMobile ? '5vh' : 24,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                            padding: 8,
                            ...streamStyle,
                        }}
                    >
                        <Typography
                            display="inline"
                            variant='h5'
                            sx={{
                                color: 'white',
                                fontFamily: "govno-kakoeto",
                                fontWeight: 400,
                                whiteSpace: 'pre-line',
                                background: isMobile ? 'rgba(14,8,66,0.8)' : 'transparent'
                            }}
                        >
                            {`В 2022 году сотрудники Санофи Джензайм получили секретное сообщение из будущего. Его доставил сотрудник Си Джей, который также является работником бизнес-подразделения, только в далеком будущем.
                                
                                Рядовой выполнил миссию ценой билета в один конец…
                                
                                Но команда Санофи из 2022 поможет Си Джею вернуться назад в будущее, хотя они еще не знают, с какими задачами им придется столкнуться.
                                
                                `}
                        </Typography>
                        <Typography
                            display="inline"
                            variant='h4'
                            sx={{
                                color: 'white',
                                fontFamily: "govno-kakoeto",
                                fontWeight: 400,
                                whiteSpace: 'pre-line',
                                background: 'rgba(14,8,66,0.8)',
                                marginTop: 16,
                            }}
                        >
                            {`Давайте сделаем это прямо сейчас!`}
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
                        <div style={{height: isMobile ? 16 : 64}}/>
                        <NeonButton text='Играть' onClick={() => navigate('/game/1')}/>
                        <div style={{height: 16}}/>
                    </animated.div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default StartTest;
