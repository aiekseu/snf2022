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
import {Axios} from "axios-observable";
import frame_1 from "../images/frame_1.jpg";
import frame_2 from "../images/frame_2.jpg";
import frame_3 from "../images/frame_3.jpg";
import frame_4 from "../images/frame_4.jpg";
import frame_5 from "../images/frame_5.jpg";
import comics_final from "../images/comics_final.JPG";


const DisplayOver = styled(Box)(({theme}) => ({
    height: "100%",
    width: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    zIndex: 2,
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    padding: theme.spacing(2),
    boxSizing: "border-box",
    ['&:hover']: {
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    ['&:hover :first-of-type']: {
        opacity: 1,
    },
}));

const Hover = styled(Box)({
    opacity: 0,
    transition: "opacity 350ms ease",
    height: "100%",
    width: "100%",
});


const Background = styled(Box)({
    position: "relative",
    height: "100%",
    cursor: "default",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderWidth: 2,
    boxSizing: 'border-box',
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


// const questions = [
//     {
//         num: 1,
//         question: 'На чем вы отправитесь?',
//         answers: [
//             {
//                 votes: 3,
//                 text: 'Сверхзвуковая карета скорой помощи. Противозаконно, но быстро'
//             },
//             {
//                 votes: 7,
//                 text: 'ВАЗ 2111. Проверено временем, но сомнительно'
//             },
//             {
//                 votes: 5,
//                 text: 'Едем тестировать созданные командами машины'
//             }
//         ]
//     },
//     {
//         num: 2,
//         question: 'Какой сверх режим вы выбираете?',
//         answers: [
//             {
//                 votes: 3,
//                 text: 'Режим невидимости, никто нас не заметит, главное самим не потеряться'
//             },
//             {
//                 votes: 7,
//                 text: 'Режим безлимитного питания'
//             },
//             {
//                 votes: 5,
//                 text: 'Режим сверхбыстрого прыжка из точки А в точку Б'
//             }
//         ]
//     },
//     {
//         num: 3,
//         question: 'Вы приземлились днём на незнакомой планете в поисках необходимого вещества. Что будете делать?',
//         answers: [
//             {
//                 votes: 3,
//                 text: 'Без раздумий отправимся на поиски вещества'
//             },
//             {
//                 votes: 7,
//                 text: 'Подготовим набор первой необходимости, разведаем обстановку экологического и биологического характера, и отправимся в путь ночью'
//             },
//             {
//                 votes: 5,
//                 text: 'Подготовим базовый набор и без разведки отправимся днём на поиски'
//             }
//         ]
//     },
//     {
//         num: 4,
//         question: 'Кто возглавит операцию?',
//         answers: [
//             {
//                 votes: 3,
//                 text: 'Лунтик'
//             },
//             {
//                 votes: 7,
//                 text: 'Елена Малышева'
//             },
//             {
//                 votes: 5,
//                 text: 'Дэвид Хугазян'
//             }
//         ]
//     },
//     {
//         num: 5,
//         question: '',
//         answers: [
//             {
//                 votes: 3,
//                 text: ''
//             },
//             {
//                 votes: 7,
//                 text: ''
//             },
//             {
//                 votes: 5,
//                 text: ''
//             }
//         ]
//     },
// ];

// const questions = questionsS
//
// function transform(questions) {
//     const output = [];
//     for (const question of questions) {
//         const sumVotes = question.answers.reduce((a, ans) => a + ans.votes, 0);
//         const percentageAnswers = [];
//         let rest = 0;
//         for (const [ix, answer] of question.answers.entries()) {
//             if (ix !== question.answers.length - 1) {
//                 const p = Math.round(answer.votes / sumVotes * 100) || 1;
//                 rest += p;
//                 percentageAnswers.push({
//                     percentage: p,
//                     text: answer.text
//                 });
//             } else {
//                 percentageAnswers.push({
//                     percentage: 100 - rest,
//                     text: answer.text
//                 });
//             }
//         }
//         output.push({
//             ...question,
//             answers: percentageAnswers
//         });
//     }
//     return output;
// }

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

    const comicsPages = [frame_1, frame_2, frame_3, frame_4, frame_5];

    const logoOpacityStyle = useSpring({
        from: {opacity: 0,},
        to: {opacity: 1,},
        delay: 0,
        config: {duration: 1500}
    });

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        Axios.get('https://sanofi-genzyme.herokuapp.com/api/questions/')
            .subscribe({
                next: (response) => setQuestions(response.data),
                error: (err) => alert(err)
            });
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
                    <Grid container columns={19} rowSpacing={2} justifyContent={'space-between'} alignItems={'stretch'}>
                        {
                            questions.length &&
                            <>
                                <Grid item xs={19} md={10}>
                                    <Frame aspectRatio={"5/3"} background={comicsPages[0]} question={questions[0]}/>
                                </Grid>
                                <Grid item xs={19} md={8}>
                                    <Frame aspectRatio={"4/3"} background={comicsPages[1]} question={questions[1]}/>
                                </Grid>
                                <Grid item xs={19} md={19}>
                                    <Frame aspectRatio={"19/6"} background={comicsPages[2]} question={questions[2]}/>
                                </Grid>
                                <Grid item xs={19} md={8}>
                                    <Frame aspectRatio={"4/3"} background={comicsPages[3]} question={questions[3]}/>
                                </Grid>
                                <Grid item xs={19} md={10}>
                                    <Frame aspectRatio={"5/3"} background={comicsPages[4]} question={questions[4]}/>
                                </Grid>
                            </>
                        }
                    </Grid>
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

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('md'));
    question.answers.sort((a, b) => parseInt(b.percentage) - parseInt(a.percentage))

    return (
        <Background
            style={{
                aspectRatio: aspectRatio,
                backgroundImage: `url(${background})`,
            }}
        >
            <DisplayOver>
                <Hover style={{textAlign: 'center'}}>
                    <Grid container
                          direction={'column'}
                          alignItems={'center'}
                          justifyContent={'center'}
                          style={{height: '100%'}}
                    >
                        <Grid container item rowSpacing={1} columns={24} alignItems={'center'}>
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
                                                        fontSize={isMobile ? '1rem' : '1.12rem'} // НЕ УДАЛЯТЬ
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
                    </Grid>
                </Hover>
            </DisplayOver>
        </Background>
    )
}

export default ResultPage;
