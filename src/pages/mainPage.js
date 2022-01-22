import {
    Card, Container,
    createTheme, Grid, IconButton,
    responsiveFontSizes, Slide, Stack,
    ThemeProvider, Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";
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

const ScheduleElement = ({time, activity}) => {

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container justifyContent='center' alignItems='center'>
            <Grid item xs={6} sx={{textAlign: 'end'}}>
                <Typography
                    display='inline'
                    variant='subtitle1'
                    sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#fff',
                        marginRight: 4,
                        textAlign: 'end'
                    }}
                >
                    {time}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography
                    display='inline'
                    variant='subtitle1'
                    sx={{
                        color: 'white',
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 400,
                    }}
                >
                    {activity}
                </Typography>
            </Grid>

        </Grid>
    )
}

const BlockTitle = ({blockNum, blockName}) => {
    return (
        <div style={{marginTop: 20, marginBottom: 8, textAlign: 'center'}}>
            <Typography
                display='inline'
                variant='h4'
                sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    color: '#fff',
                    fontWeight: 500,
                    textTransform: 'uppercase'
                }}
            >
                {'Блок '}
            </Typography>
            <Typography
                display='inline'
                variant='h4'
                sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    color: '#fff',
                    fontWeight: 500,
                    textTransform: 'uppercase'
                }}
            >
                {blockNum}
            </Typography>
            <Typography
                display='inline'
                variant='h4'
                sx={{
                    fontFamily: '"Montserrat", sans-serif',
                    color: '#fff',
                    fontWeight: 500,
                    textTransform: 'uppercase'
                }}
            >
                {`. ${blockName}`}
            </Typography>
        </div>
    )
}

const Schedule = () => {

    return (
        <Container maxWidth='md'>
            <div style={{
                width: '100%',
                textAlign: 'center',
                marginTop: 16,
                marginBottom: 8,
            }}>
                <Typography
                    display='inline'
                    variant='h4'
                    sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#fff',
                        fontWeight: 500,
                    }}
                >
                    SANOFI GENZYME – 24 ЯНВАРЯ 2022
                </Typography>
            </div>
            <ScheduleElement time='11:00 - 11:05' activity='Ролик-открытие'/>
            <ScheduleElement time='11:05 – 11:15' activity='Дэвид Хугазян'/>

            <BlockTitle blockName='Будущее начинается здесь' blockNum={1}/>
            <ScheduleElement time='11:15 - 11:22' activity='Сафир Мелан'/>
            <ScheduleElement time='11:22 – 11:32' activity='Борис Иванченко'/>
            <ScheduleElement time='11:32 – 11:37' activity='Санг Хи Чо'/>
            <ScheduleElement time='11:37 – 11:42' activity='Амани Мустафа'/>
            <ScheduleElement time='11:42 – 11:52' activity='Денис Григорьев'/>
            <ScheduleElement time='11:52 – 11:55' activity='Интерактив'/>
            <ScheduleElement time='11:55 – 12:05' activity='Медхат Аль-Бейли'/>
            <ScheduleElement time='12:05 – 12:15' activity='Наталия Бессонова'/>
            <ScheduleElement time='12:15 – 12:25' activity='Лилия Зиад'/>
            <ScheduleElement time='12:25 – 12:35' activity='Вера Емельянова'/>
            <ScheduleElement time='12:35 – 12:45' activity='Перерыв'/>

            <BlockTitle blockName='Футурама ток' blockNum={2}/>
            <ScheduleElement time='12:45 – 12:50' activity='Интерактив'/>
            <ScheduleElement time='12:50 – 13:10' activity='Футурама-ток'/>

            <BlockTitle blockName='Опережая время' blockNum={3}/>
            <ScheduleElement time='13:10 – 13:13' activity='Интерактив'/>
            <ScheduleElement time='13:13 – 13:23' activity='Юрий Мочалин'/>
            <ScheduleElement time='13:23 – 13:30' activity='Наталья Руднева'/>
            <ScheduleElement time='13:30 – 13:33' activity='Интерактив'/>
            <ScheduleElement time='13:33 – 13:36' activity='Сергей Егоров'/>
            <ScheduleElement time='13:36 – 13:41' activity='Михаил Кожемякин'/>
            <ScheduleElement time='13:41 – 13:48' activity='Михаил Суртаев'/>
            <ScheduleElement time='13:48 – 13:53' activity='Полина Мурзина'/>
        </Container>
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
                        id='streamIframe'
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
                        <div
                            style={{height: '100%', width: '100%'}}
                            dangerouslySetInnerHTML={{
                                __html: `
                                    <iframe 
                                    id="gyq73m" 
                                    onLoad="fc_load_iframe(this)" 
                                    width="100%" 
                                    height="100%" 
                                    style="border:none; margin: 0"
                                    allow="autoplay; fullscreen" 
                                    allowFullScreen></iframe>`
                            }}/>

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
                            <div style={{height: isMobile ? 12 : 0}}/>
                            <Stack alignItems='center'>
                                <Schedule/>
                            </Stack>
                        </Container>
                    </div>
                </Slide>
            </div>
        </ThemeProvider>
    );
}

export default MainPage;
