import {
    Box,
    Container,
    createTheme,
    Grid,
    IconButton,
    responsiveFontSizes,
    Slide,
    Stack,
    ThemeProvider,
    Typography,
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
        <Grid container justifyContent='center' alignItems='start' mt={1}>
            <Grid item xs={5} sm={4} md={3} sx={{textAlign: 'end'}}>
                <Typography
                    display='inline'
                    variant='subtitle1'
                    sx={{
                        fontFamily: '"Montserrat", sans-serif',
                        color: '#fff',
                        marginRight: isMobile ? 2 : 4,
                        textAlign: 'end'
                    }}
                >
                    {time}
                </Typography>
            </Grid>
            <Grid item xs={7} sm={8} md={9}>
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
            <ScheduleElement time='11:00 - 11:02' activity='Ролик-открытие'/>
            <ScheduleElement time='11:02 – 11:05' activity='Приветствие'/>
            <ScheduleElement time='11:05 – 11:15'
                             activity='Дэвид Хугазян — Руководитель Санофи Джензайм в регионе Интэрнэшнл и Китай'/>

            <BlockTitle blockName='Будущее начинается здесь' blockNum={1}/>
            <ScheduleElement time='11:15 – 11:22'
                             activity='Сафир Мелан — Руководитель направления Онкология в регионе Интэрнэшнл и Китай'/>
            <ScheduleElement time='11:22 – 11:32'
                             activity='Борис Иванченко — Руководитель направления Онкология и Гематология'/>
            <ScheduleElement time='11:32 – 11:37'
                             activity='Санг Хи Чо — Руководитель дерматологического направления Дупиксент в регионе Интэрнэшнл и Китай'/>
            <ScheduleElement time='11:37 – 11:42'
                             activity='Амани Мустафа — Руководитель респираторного направления Дупиксент в регионе Интэрнэшнл и Китай'/>
            <ScheduleElement time='11:42 – 11:52' activity='Денис Григорьев — Руководитель направления Дупиксент'/>
            <ScheduleElement time='11:52 – 11:55' activity='Интерактив'/>
            <ScheduleElement time='11:55 – 12:05'
                             activity='Медхат Аль-Бейли — Руководитель направления Редкие заболевания в регионе Интэрнэшнл и Китай'/>
            <ScheduleElement time='12:05 – 12:15'
                             activity='Наталия Бессонова — Руководитель направления Редкие заболевания и рассеянный склероз'/>
            <ScheduleElement time='12:15 – 12:25'
                             activity='Лилия Зиад — Руководитель медицинского департамента Санофи Джензайм в регионе Интэрнэшнл и Китай'/>
            <ScheduleElement time='12:25 – 12:35'
                             activity='Вера Емельянова — Руководитель медицинского отдела Санофи Джензайм Евразийского региона'/>
            <ScheduleElement time='12:35 – 12:45' activity='Перерыв'/>

            <BlockTitle blockName='Футурама ток' blockNum={2}/>
            <ScheduleElement time='12:45 – 12:50' activity='Интерактив'/>
            <ScheduleElement time='12:50 – 13:10' activity='Футурама-ток'/>

            <BlockTitle blockName='Опережая время' blockNum={3}/>
            <ScheduleElement time='13:10 – 13:13' activity='Интерактив'/>
            <ScheduleElement time='13:13 – 13:23' activity='Команда по корпоративным связям Евразийского региона'/>
            <ScheduleElement time='13:23 – 13:30'
                             activity='Наталья Руднева — Исполняющий обязанности директора по коммерческим операциям и управлению доходами'/>
            <ScheduleElement time='13:30 – 13:33' activity='Интерактив'/>
            <ScheduleElement time='13:33 – 13:41'
                             activity='Сергей Егоров — Руководитель направления диджитал и мультиканального маркетинга и Михаил Кожемякин  — Менеджер по управлению клиентским опытом'/>
            <ScheduleElement time='13:41 – 13:48' activity='Михаил Суртаев — HR Бизнес-партнер'/>
            <ScheduleElement time='13:48 – 13:53'
                             activity='Полина Мурзина — Главный менеджер по соблюдению корпоративных правил и бизнес-этики Евразийского региона'/>
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
                        overflowX: 'hidden',
                        overflowY: 'scroll',
                    }}
                    className='schedule'
                >
                    <animated.img
                        src={logo}
                        alt='logo_1'
                        style={{
                            overflow: 'hidden',
                            width: isMobile ? '35vmax' : 'auto',
                            ...logoHeightStyle,
                            ...logoOpacityStyle,
                        }}
                    />
                    <Box sx={{
                        height: isMobile ? '15vh' : '24px',
                        '@media (orientation: landscape)': {
                            height: 2,
                        },
                    }}/>

                    <animated.div
                        id='streamIframe'
                        style={{
                            height: isMobile ? '51vw' : '55vh',
                            width: isMobile ? '90vw' : '97vh',
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
                    <div style={{height: 32}}/>
                    <animated.div style={{visibility: isScheduleOpen ? 'hidden' : 'visible', ...streamStyle,}}>
                        <NeonButton text='показать программу' onClick={() => setIsScheduleOpen(true)}/>
                    </animated.div>

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
