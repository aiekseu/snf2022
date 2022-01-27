import {Fragment, useEffect, useState} from "react";
import {
    Button,
    Container,
    createTheme,
    Grid,
    responsiveFontSizes,
    Stack,
    ThemeProvider,
    Typography,
    useMediaQuery
} from "@mui/material";
import {animated, useSpring} from "react-spring";
import {Box, styled} from "@mui/system";

import bg from '../images/bg_questions.jpg'
import logo from '../images/logo.png'

import DownloadIcon from '@mui/icons-material/Download';
import frame_1 from "../images/frame_1.jpg";
import frame_2 from "../images/frame_2.jpg";
import frame_3 from "../images/frame_3.jpg";
import frame_4 from "../images/frame_4.jpg";
import frame_5 from "../images/frame_5.jpg";
import comics_final from "../images/comics_final.JPG";
import axios from "axios";


const DisplayOver = styled(Box)({
    height: "100%",
    width: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.0)",
    boxSizing: "border-box",
    '&:hover': {
        backgroundColor: "rgba(0,0,0,0.7)",
    },
});

const Hover = styled(Box)({
    transition: "opacity 350ms ease",
    height: "100%",
    width: "100%",
});


const Background = styled(Box)({
    position: "relative",
    height: "100%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderWidth: 2,
    borderStyle: 'solid',
    borderImage: 'linear-gradient(180deg, rgba(244,64,148,1) 0%, rgba(85,74,218,1) 100%)',
    borderImageSlice: 1,
});

const ActionButton = styled(Button)(({theme}) => ({
    borderRadius: 3,
    background: '#5b053d',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    whiteSpace: 'nowrap',
    textTransform: 'none',
    boxShadow: "0px 0px 6px 0px rgba(162, 1, 105, 0.6)",
    '&:hover': {
        borderColor: '#5b053d',
        backgroundColor: 'rgb(119,2,78)',
        borderWidth: 4,
        boxShadow: "0px 0px 10px 0px rgba(162, 1, 105, 0.9)",
    },
}));


const ResultPage = () => {

    let theme = createTheme({
        typography: {
            fontFamily: "'Raleway', sans-serif",
        },
        components: {
            MuiTypography: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontWeight: 400,
                    }
                }
            },
        },
    });
    theme = responsiveFontSizes(theme);

    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
        config: {duration: 1500}
    });

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get('https://sanofi-genzyme.herokuapp.com/api/questions/')
            .then(function (response) {
                setQuestions(response.data);
            })
            .catch(function (error) {
                alert(error);
            })
    }, []);


    return (
        <ThemeProvider theme={theme}>
            <Box pb={4}
                 style={{
                     minHeight: '100vh',
                     backgroundImage: `url(${bg})`,
                     backgroundPosition: 'center top',
                     backgroundRepeat: 'repeat',
                 }}
            >
                <Box textAlign={'center'}>
                    <animated.img src={logo}
                                  alt='logo'
                                  style={{
                                      zIndex: 1,
                                      width: 'auto',
                                      height: '20vh',
                                      ...logoOpacityStyle,
                                  }}
                    />
                </Box>
                <Container maxWidth='md' sx={{mt: 2}}>
                    {isMobile ?
                        <div>
                            <MobileFrame aspectRatio={"5/3"} background={frame_1}/>
                            <MobileFrame aspectRatio={"4/3"} background={frame_2}/>
                            <MobileFrame aspectRatio={"19/6"} background={frame_3}/>
                            <MobileFrame aspectRatio={"4/3"} background={frame_4}/>
                            <MobileFrame aspectRatio={"5/3"} background={frame_1}/>
                        </div>
                        :
                        <Grid container columns={19} rowSpacing={2} justifyContent={'space-between'}
                              alignItems={'stretch'}>
                            {
                                questions.length &&
                                <>
                                    <Grid item xs={19} md={10}>
                                            <Frame aspectRatio={"5/3"} background={frame_1} question={questions[0]}/>
                                    </Grid>
                                    <Grid item xs={19} md={8}>
                                            <Frame aspectRatio={"4/3"} background={frame_2} question={questions[1]}/>
                                    </Grid>
                                    <Grid item xs={19} md={19}>
                                            <Frame aspectRatio={"19/6"} background={frame_3} question={questions[2]}/>
                                    </Grid>
                                    <Grid item xs={19} md={8}>
                                            <Frame aspectRatio={"4/3"} background={frame_4} question={questions[3]}/>
                                    </Grid>
                                    <Grid item xs={19} md={10}>
                                            <Frame aspectRatio={"5/3"} background={frame_5} question={questions[4]}/>
                                    </Grid>
                                </>
                            }
                        </Grid>
                    }
                    <Stack justifyContent={'end'} direction={'row'} spacing={2} mt={3}>
                        <ActionButton
                            endIcon={<DownloadIcon sx={{color: '#fff', height: 32, width: 32, pr: 1}}/>}
                            onClick={() => {
                                const anchor = document.createElement('a');
                                anchor.href = comics_final;
                                anchor.download = 'comics_sanofi';

                                // Append to the DOM
                                document.body.appendChild(anchor);

                                // Trigger `click` event
                                anchor.click();

                                // Remove element from DOM
                                document.body.removeChild(anchor);
                            }}
                        >
                            <Typography variant={'h5'} pl={2} pr={1} py={0.5}>
                                сохранить
                            </Typography>
                        </ActionButton>
                    </Stack>
                </Container>
            </Box>
        </ThemeProvider>
    );
}


const Frame = ({aspectRatio, background, question}) => {

    question.answers.sort((a, b) => parseInt(b.percentage) - parseInt(a.percentage))
    const [opacity, setOpacity] = useState('hidden')

    return (
        <Background
            style={{
                aspectRatio: aspectRatio,
                backgroundImage: `url(${background})`,
            }}
        >
            <DisplayOver onMouseEnter={() => setOpacity('visible')}
                         onMouseLeave={() => setOpacity('hidden')}
            >
                <Stack
                    direction={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    style={{height: '100%', visibility: opacity, padding: 8, textAlign: 'center'}}
                >
                    <Grid
                        container
                        rowSpacing={1}
                        columns={24}
                        alignItems={'center'}
                    >
                        {
                            question.answers.map((el, ix) => (
                                <Fragment key={ix}>
                                    <Grid item xs={6}>
                                        <Typography variant={'h3'}
                                                    fontWeight={500}
                                                    fontFamily={'digital-clock-font'}
                                                    style={{
                                                        background: "linear-gradient(180deg, rgb(255,66,154) 0%, rgb(91,78,230) 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                    }}
                                        >
                                            {el.percentage}%
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={18}>
                                        <Typography variant={'body1'}
                                                    align={'left'}
                                                    fontSize={'1.12rem'} // НЕ УДАЛЯТЬ
                                                    lineHeight={'1.25em'}
                                                    fontWeight={500}
                                                    color={'#ffa9d1'}
                                        >
                                            {el.res_text}
                                        </Typography>
                                    </Grid>
                                </Fragment>
                            ))
                        }
                    </Grid>
                </Stack>
            </DisplayOver>
        </Background>
    )
}

const MobileFrame = ({aspectRatio, background}) => {
    return (
        <Background
            style={{
                aspectRatio: aspectRatio,
                marginTop: 16
            }}
        >
            <img src={background} alt={'comics'} style={{
                height: '100%',
                width: '100%',
            }}/>
        </Background>
    )
}

export default ResultPage;
